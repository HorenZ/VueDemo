export var b = 20
import $ from 'jquery'
import './assets/css/index.css'
// $('body').css('background', 'green')

import WYF from './assets/img/wyf.jpg'
let img = $('<img/>').attr('src', WYF)
$('body').append(img)

import zz from './assets/img/zz.jpg'
let img1 = $('<img/>').attr('src', zz)
$('body').append(img1)