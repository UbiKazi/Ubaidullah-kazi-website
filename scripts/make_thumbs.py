"""One-time thumbnail generator. Renders chosen PDF pages to WebP.
Usage: python scripts/make_thumbs.py <folder-with-source-docs>
Source documents are never copied into the site — only these previews."""
import subprocess, sys, os, tempfile
from PIL import Image, ImageDraw, ImageFont

SRC = sys.argv[1] if len(sys.argv) > 1 else "."
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "thumbs")
os.makedirs(OUT, exist_ok=True)

# (output name, source pdf, page, crop box fractions (l,t,r,b) or None, width px)
JOBS = [
  ("apple-er", "Apple_Equity_Research_Report.pdf", 1, None, 520),
  ("apple-er-p7", "Apple_Equity_Research_Report.pdf", 7, None, 900),
  ("apple-er-p8", "Apple_Equity_Research_Report.pdf", 8, None, 900),
  ("prism", "PRISM_OYO_IPO_Pitchbook.pdf", 1, None, 720),
  ("prism-p4", "PRISM_OYO_IPO_Pitchbook.pdf", 4, None, 1000),
  ("prism-p12", "PRISM_OYO_IPO_Pitchbook.pdf", 12, None, 1000),
  ("prism-p15", "PRISM_OYO_IPO_Pitchbook.pdf", 15, None, 1000),
  ("aramco", "AramcoPower_SellSide_Pitchbook.pdf", 1, None, 720),
  ("dpworld", "DPWorld_BuySide_Pitchbook.pdf", 1, None, 720),
  ("dealogue-enbd-rbl", "Dealogue_Emirates_NBD_RBL_Bank.pdf", 1, None, 520),
  ("sectorscope-banking", "SECTORSCOPE_Global_Banking.pdf", 1, (0, 0, 1, .44), 720),
  ("ecospective-china", "Ecospective_China_June_2026.pdf", 1, None, 520),
  ("workout-wire-byjus", "The_Workout_Wire_Byjus.pdf", 1, None, 520),
  ("balasamy", "Judgment_Memo_Balasamy_v_ISG_Novasoft.pdf", 1, None, 520),
  ("balasamy-p2", "Judgment_Memo_Balasamy_v_ISG_Novasoft.pdf", 2, None, 900),
  ("amex", "AmEx_Brand_Case_Study.pdf", 1, None, 520),
  ("swiggy-ipo", "IPO_Note_Swiggy.pdf", 1, None, 720),
  ("sunpharma", "SunPharma_News_Analysis.pdf", 1, None, 520),
  ("tsmc-bmc", "TSMC_Business_Model_Canvas.pdf", 1, None, 720),
  ("ledgerline", "The_Ledgerline_-_Week_in_Review__August_3-9__2026_.pdf", 1, None, 520),
]
tmp = tempfile.mkdtemp()
for name, pdf, page, crop, width in JOBS:
    base = os.path.join(tmp, name)
    subprocess.run(["pdftoppm", "-r", "160", "-png", "-singlefile", "-f", str(page), "-l", str(page),
                    os.path.join(SRC, pdf), base], check=True)
    im = Image.open(base + ".png").convert("RGB")
    if crop:
        w, h = im.size
        im = im.crop((int(crop[0]*w), int(crop[1]*h), int(crop[2]*w), int(crop[3]*h)))
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(os.path.join(OUT, name + ".webp"), "WEBP", quality=74, method=6)
    print(name, im.size)

def model_preview():
    """Designed preview of the Excel model, drawn from the workbook's real DCF sensitivity grid."""
    from openpyxl import load_workbook
    wb = load_workbook(os.path.join(SRC, "Apple_Financial_Model.xlsx"), read_only=True, data_only=True)
    grid, head, capture = [], [], False
    for r in wb["DCF Valuation"].iter_rows(values_only=True):
        v = [c for c in r if c is not None]
        if not v: continue
        if isinstance(v[0], str) and v[0].startswith("WACC \\"):
            capture, head = True, v[1:6]; continue
        if capture and isinstance(v[0], float) and len(v) >= 6:
            grid.append(v[:6])
    W, H = 720, 520
    im = Image.new("RGB", (W, H), "#ffffff"); d = ImageDraw.Draw(im)
    F = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"; FB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
    f = lambda s, b=False: ImageFont.truetype(FB if b else F, s)
    d.rectangle([0, 0, W, 38], fill="#1f4e3d"); x = 8
    for t in wb.sheetnames:
        tw = d.textlength(t, font=f(10)) + 12
        on = t == "DCF Valuation"
        d.rectangle([x, 12, x+tw, 38], fill="#ffffff" if on else "#2e6b55")
        d.text((x+6, 19), t, font=f(10), fill="#1f4e3d" if on else "#e6f0ea"); x += tw + 2
    d.text((24, 58), "Apple Inc. — Discounted Cash Flow Valuation", font=f(20, True), fill="#111")
    d.text((24, 88), "Implied share price (₹) by WACC and terminal growth", font=f(13), fill="#555")
    cw, ch, x0, y0 = 112, 50, 24, 130
    d.rectangle([x0, y0, x0+cw, y0+ch], fill="#e9efe9"); d.text((x0+10, y0+17), "WACC \\ g", font=f(13, True), fill="#111")
    for j, g in enumerate(head):
        X = x0 + cw*(j+1); d.rectangle([X, y0, X+cw, y0+ch], fill="#e9efe9")
        d.text((X+30, y0+17), f"{g*100:.2f}%", font=f(13, True), fill="#111")
    for i, row in enumerate(grid):
        Y = y0 + ch*(i+1)
        d.rectangle([x0, Y, x0+cw, Y+ch], fill="#f6f6f6"); d.text((x0+24, Y+17), f"{row[0]*100:.2f}%", font=f(13, True), fill="#1d4ed8")
        for j, v in enumerate(row[1:]):
            X = x0 + cw*(j+1); base = (i == 2 and j == 2)
            d.rectangle([X, Y, X+cw, Y+ch], fill="#fdf1c7" if base else "#ffffff", outline="#dddddd")
            d.text((X+24, Y+17), f"{v:,.0f}", font=f(13, base), fill="#111")
    d.text((24, H-40), "8 linked tabs  |  FCFF DCF  |  Gordon growth terminal value  |  Trading comps", font=f(12), fill="#666")
    im.save(os.path.join(OUT, "apple-model.webp"), "WEBP", quality=80, method=6)
    print("apple-model", im.size, len(grid), "rows")
model_preview()
