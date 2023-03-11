// // $(function(){
	
// // });

// $(document).ready(function () {
//     $(".typed").typed({
// 		strings: ["Seo", "Designers", "Software"],
// 		stringsElement: null,
// 		typeSpeed: 80,
// 		backSpeed: 80,
// 		backDelay: 800,
// 		loop: true,
// 	});
// });

// Can also be included with a regular script tag
// import Typed from 'typed.js';

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

// var typed = new Typed('.element', options);

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    strings: [
      'FullStack Developer',
      'FrontEnd Developer',
      'BackEnd Developer',
      'Web Designer'
    ],
    stringsElement: null,
    typeSpeed:40,
    loop:true
});