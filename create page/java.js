const inputEpisode = document.getElementById('name');
const inputSeason = document.getElementById('season');
const inputFarsi = document.getElementById('farsi');
const inputEnglish = document.getElementById('english');
const inputTexterea = document.getElementById('iframe');
const description = document.getElementById('description');
const btn = document.getElementById('button');


// --------------------------



function pasteClipboardText() {
    // دریافت متن از کلیپ‌بورد
    const clipboardText = navigator.clipboard.readText();
    
    // یافتن المان textarea با استفاده از شناسه inputTexterea
    const textarea = document.getElementById('iframe');
    
    // جایگذاری متن کلیپ‌بورد در textarea
    clipboardText.then(text => {
        textarea.value = text;
    });
}

let testi = inputFarsi.value
let testi5 = inputTexterea.value
// ----------------------------

function createHtmlFile() {
    const htmlContent = `<!DOCTYPE html>
    <html lang="fa" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> ${inputFarsi.value} </title>
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
    <header class="header">
        <a href="#">
            <img class="logo" src="../images/logo.png" alt="لوگو">
        </a>
        <input type="search" class="search-box" placeholder="جست و جوی انیمه">
        <img class="logo" src="../images/user.png" alt="کاربر">
    </header>
    
    ${inputTexterea.value}
    
    <div class="title text-center">
        <h1 class=""> ${inputFarsi.value} فصل ${inputSeason.value} قسمت ${inputEpisode.value} </h1>
    </div>
    
    <div class="description">
        <div class="text-center"><span class="detale">توضیحات بیشتر</span>
        </div>
        <h2 class="title-name-anime"> ${inputFarsi.value} </h2>
        <p class="other-text">${description.value}</p>
    </div>
    <footer class="footer">
        <span style="color: whitesmoke;padding-top: 10px;"> تمامی حقوق وبسایت محفوظ می‌باشد </span>
        <br>
        <span style="color: whitesmoke;margin-bottom: 5px;"> راه‌های ارتباطی </span>
        <div class="irem">
            <a href="https://eitaa.com/ehsan_cyber" class="links">
                <img src="https://eitaa.com/assets/images/logos/site-logo-larg.png" alt="ایتا" class="logos">
            </a>
            <a href="https://ble.ir/ehsan_cyber" class="links">
                <img src="https://bayanbox.ir/view/906668274497913030/bale-Logo-splash-2.png" alt="بله" class="logos">
            </a>
            <a href="https://t.me/Ehsan_Cyber" class="links">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644" alt="تلگرام" class="logos">
            </a>
        </div>
    </footer>
    <script src="../js/script.js"></script>
    </body>
    </html>`;
    console.log(htmlContent);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${inputEnglish.value}-E${inputEpisode.value}-S${inputSeason.value}.html`;
    a.click();
}


btn.addEventListener("click",createHtmlFile)











// تعریف محتوای HTML در متغیر htmlContent
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Downloadable HTML</title>
</head>
<body>
    <!-- اینجا محتوای HTML خود را قرار دهید -->
    <h1>سلام، این یک مثال است!</h1>
    <p>این متن از متغیر htmlContent آمده است.</p>
</body>
</html>
`;

