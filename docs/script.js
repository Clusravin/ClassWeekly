var line = document.querySelector(".line");
var timeline = document.querySelector("ul");
var copyright = document.querySelector("#copyright");

function warn() {
    alert("大部分周记分布在第三方图文创作分享网站（如美篇）各位同学的账号下，删除将导致无法访问，因此如须删除请提前联系制作人员，将该篇文章转移。");
}

function insertYear() {
    var date = new Date;
    var year = date.getFullYear();

    copyright.innerHTML = "<p>&copy; " + year + " 范子睿</p>";
}

function init() {
    insertYear();
}