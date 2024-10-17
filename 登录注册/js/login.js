/**
 * 注册按钮
 */
document.getElementById('accountRegist').addEventListener('click', function () {
	// 按钮大小变化
	var loginButton = document.getElementById('accountLogin');
	var registButton = document.getElementById('accountRegist');
	// 字体大小过渡
	loginButton.style.transition = 'font-size 0.5s ease,transform 0.5s ease';
	registButton.style.transition = 'font-size 0.5s ease,transform 0.5s ease';
	loginButton.style.fontSize = 1.02 + 'vw';
	registButton.style.fontSize = 1.32 + 'vw';

	// 分割线滑动条
	var lineShort = document.getElementById('lineShort');
	// 线条滑动过渡
	lineShort.style.transition = 'margin-left 0.5s ease, transform 0.5s ease';
	lineShort.style.marginLeft = 7.8 + 'vw';

	// 大按钮文字内容
	var bigButton = document.getElementById('bigButton');
	bigButton.innerText = '注册';

	// 显示注册信息并隐藏登录信息
	var loginMessage = document.getElementById('loginMessage');
	var registMessage = document.getElementById('registMessage');
	loginMessage.style.display = 'none';
	registMessage.style.display = 'flex';
})

/**
 * 登录按钮
 */
document.getElementById('accountLogin').addEventListener('click', function () {
	var loginButton = document.getElementById('accountLogin');
	var registButton = document.getElementById('accountRegist');
	loginButton.style.transition = 'font-size 0.5s ease,transform 0.5s ease';
	registButton.style.transition = 'font-size 0.5s ease,transform 0.5s ease';
	loginButton.style.fontSize = 1.32 + 'vw';
	registButton.style.fontSize = 1.02 + 'vw';

	var lineShort = document.getElementById('lineShort');
	lineShort.style.transition = 'margin-left 0.5s ease, transform 0.5s ease';
	lineShort.style.marginLeft = 2.2 + 'vw';

	var bigButton = document.getElementById('bigButton');
	bigButton.innerText = '登录';

	var loginMessage = document.getElementById('loginMessage');
	var registMessage = document.getElementById('registMessage');
	loginMessage.style.display = 'flex';
	registMessage.style.display = 'none';
})

/**
 * 记住密码
 */
document.getElementById('checkBox').addEventListener('click', function () {
	var checkbox = document.getElementById('checkbox');
	console.log(123)

	// 设置对勾
	if (!checkbox.style.backgroundImage || checkbox.style.backgroundImage == "none") {
		checkbox.style.backgroundImage = "url('./images/√.svg')";
		checkbox.style.backgroundRepeat = "no-repeat";
		checkbox.style.backgroundSize = "cover";
	} else {
		checkbox.style.backgroundImage = "none";
	}
})

/**
 * 限制输入内容
 */
var inputs = document.querySelectorAll('input[type="text"],input[type="password"]');
// 为每个输入框添加input事件监听器
inputs.forEach(function (input) {
	input.addEventListener('input', function (e) {
		// 替换所有空格为''
		this.value = this.value.replace(/\s/g, '');
	});
});

document.getElementById('number').addEventListener('input', function (e) {
	// 替换所有非数字为''
	this.value = this.value.replace(/[^0-9]/g, '');
	// 若输入位数超过11位，则截断到11位
	if (this.value.length > 11) {
		this.value = this.value.slice(0, 11);
	}
})