'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyledReactDatePicker = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _polished = require('polished');

var _validation = require('../styles/validation');

var _validation2 = _interopRequireDefault(_validation);

var _state = require('../styles/state');

var _state2 = _interopRequireDefault(_state);

var _iconAdjustment = require('../styles/icon-adjustment');

var _iconAdjustment2 = _interopRequireDefault(_iconAdjustment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDatepicker = _styledComponents2.default.div.withConfig({
	displayName: 'styles__StyledDatepicker',
	componentId: 'sc-13rnk96-0'
})(['& .react-datepicker-wrapper,& .react-datepicker__input-container{width:100%;}& .react-datepicker-wrapper{display:inline-block;}& .react-datepicker{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:0.8rem;background-color:#fff;color:#000;border:1px solid ', ';border-radius:', ';display:inline-block;position:relative;width:100%;}& .react-datepicker__triangle{position:absolute;left:50px;}& .react-datepicker--time-only .react-datepicker__triangle{left:35px;}& .react-datepicker--time-only .react-datepicker__time{border-radius:', ';}& .react-datepicker--time-only .react-datepicker__time-box{border-radius:', ';}& .react-datepicker-popper{z-index:1;width:100%;min-width:250px;}& .react-datepicker-popper[data-placement^="bottom"]{margin-top:10px;}& .react-datepicker-popper[data-placement^="top"]{margin-bottom:10px;}& .react-datepicker-popper[data-placement^="right"]{margin-left:8px;}& .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle{left:auto;right:42px;}& .react-datepicker-popper[data-placement^="left"]{margin-right:8px;}& .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle{left:42px;right:auto;}& .react-datepicker__header{text-align:center;background-color:#f0f0f0;border-top-left-radius:0.3rem;border-top-right-radius:0.3rem;padding-top:8px;position:relative;}& .react-datepicker__header--time{padding-bottom:8px;padding-left:5px;padding-right:5px;}& .react-datepicker__year-dropdown-container--select,& .react-datepicker__month-dropdown-container--select,& .react-datepicker__month-year-dropdown-container--select,& .react-datepicker__year-dropdown-container--scroll,& .react-datepicker__month-dropdown-container--scroll,& .react-datepicker__month-year-dropdown-container--scroll{display:inline-block;margin:0 2px;}& .react-datepicker__current-month,& .react-datepicker-time__header{margin-top:0;color:#000;font-weight:bold;font-size:0.944rem;}& .react-datepicker-time__header{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}& .react-datepicker__navigation{background:none;line-height:1.7rem;text-align:center;cursor:pointer;position:absolute;top:10px;padding:0;border:0.45rem solid transparent;z-index:1;height:10px;width:10px;text-indent:-999em;overflow:hidden;}& .react-datepicker__navigation--previous{left:10px;border-right-color:#ccc;}& .react-datepicker__navigation--previous:hover{border-right-color:#b3b3b3;}& .react-datepicker__navigation--previous--disabled,& .react-datepicker__navigation--previous--disabled:hover{border-right-color:#e6e6e6;cursor:default;}& .react-datepicker__navigation--next{right:10px;border-left-color:#ccc;}& .react-datepicker__navigation--next:hover{border-left-color:#b3b3b3;}& .react-datepicker__navigation--next--disabled,& .react-datepicker__navigation--next--disabled:hover{border-left-color:#e6e6e6;cursor:default;}& .react-datepicker__navigation--years{position:relative;top:0;display:block;margin-left:auto;margin-right:auto;}& .react-datepicker__navigation--years-previous{top:4px;border-top-color:#ccc;}& .react-datepicker__navigation--years-previous:hover{border-top-color:#b3b3b3;}& .react-datepicker__navigation--years-upcoming{top:-4px;border-bottom-color:#ccc;}& .react-datepicker__navigation--years-upcoming:hover{border-bottom-color:#b3b3b3;}& .react-datepicker__month-container{float:left;width:100%;}& .react-datepicker__month{margin:0.4rem;text-align:center;}& .react-datepicker__time-container{float:right;border-left:1px solid ', ';width:70px;}& .react-datepicker--time-only .react-datepicker__time-container{border-left:0;}& .react-datepicker__time-container--with-today-button{display:inline;border:1px solid ', ';border-radius:', ';position:absolute;right:-72px;top:0;}& .react-datepicker__time-container .react-datepicker__time{position:relative;background:white;}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box{width:70px;overflow-x:hidden;margin:0 auto;text-align:center;}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list{list-style:none;margin:0;height:calc(195px + (1.7rem / 2));overflow-y:scroll;padding-right:0;padding-left:0;width:100%;box-sizing:content-box;}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{height:30px;padding:5px 10px;}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{cursor:pointer;background-color:#f0f0f0;}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{background-color:', ';color:white;font-weight:bold;}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover{background-color:', ';}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled{color:#ccc;}& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover{cursor:default;background-color:transparent;}& .react-datepicker__week-number{color:#ccc;display:inline-block;width:1.7rem;line-height:1.7rem;text-align:center;margin:0.166rem;}& .react-datepicker__week-number.react-datepicker__week-number--clickable{cursor:pointer;}& .react-datepicker__week-number.react-datepicker__week-number--clickable:hover{border-radius:', ';background-color:#f0f0f0;}& .react-datepicker__day-names,& .react-datepicker__week{white-space:nowrap;display:flex;}& .react-datepicker__day-name,& .react-datepicker__day,& .react-datepicker__time-name{color:#000;display:inline-block;width:1.7rem;line-height:1.7rem;text-align:center;margin:0.166rem;flex:1;}& .react-datepicker__day{cursor:pointer;}& .react-datepicker__day:hover{border-radius:', ';background-color:#f0f0f0;}& .react-datepicker__day--today{font-weight:bold;}& .react-datepicker__day--highlighted{border-radius:', ';background-color:#3dcc4a;color:#fff;}& .react-datepicker__day--highlighted:hover{background-color:#32be3f;}& .react-datepicker__day--highlighted-custom-1{color:magenta;}& .react-datepicker__day--highlighted-custom-2{color:green;}& .react-datepicker__day--selected,& .react-datepicker__day--in-selecting-range,& .react-datepicker__day--in-range{border-radius:', ';background-color:', ';color:#fff;}& .react-datepicker__day--keyboard-selected{background-color:', ';}& .react-datepicker__day--selected:hover,& .react-datepicker__day--in-selecting-range:hover,& .react-datepicker__day--in-range:hover{background-color:', ';background-color:', ';}& .react-datepicker__day--in-selecting-range:not(& .react-datepicker__day--in-range){background-color:rgba(33,107,165,0.5);}& .react-datepicker__day--in-range:not(& .react-datepicker__day--in-selecting-range){background-color:#f0f0f0;color:#000;}& .react-datepicker__day--disabled{cursor:default;color:', ';}& .react-datepicker__day--disabled:hover{background-color:transparent;}& .react-datepicker__day--outside-month{opacity:0.5;}& .react-datepicker__input-container{position:relative;display:inline-block;}& .react-datepicker__year-read-view,& .react-datepicker__month-read-view,& .react-datepicker__month-year-read-view{border:1px solid transparent;border-radius:', ';}& .react-datepicker__year-read-view:hover,& .react-datepicker__month-read-view:hover,& .react-datepicker__month-year-read-view:hover{cursor:pointer;}& .react-datepicker__year-read-view--down-arrow,& .react-datepicker__month-read-view--down-arrow,& .react-datepicker__month-year-read-view--down-arrow{border-top-color:#ccc;float:right;margin-left:20px;top:8px;position:relative;border-width:0.45rem;}& .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,& .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,& .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,& .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,& .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow{border-top-color:#b3b3b3;}& .react-datepicker__year-dropdown,& .react-datepicker__month-dropdown,& .react-datepicker__month-year-dropdown{background-color:#f0f0f0;position:absolute;width:50%;left:25%;top:30px;z-index:1;text-align:center;border-radius:', ';}& .react-datepicker__year-dropdown:hover,& .react-datepicker__month-dropdown:hover,& .react-datepicker__month-year-dropdown:hover{cursor:pointer;}& .react-datepicker__year-dropdown--scrollable,& .react-datepicker__month-dropdown--scrollable,& .react-datepicker__month-year-dropdown--scrollable{height:150px;overflow-y:scroll;}& .react-datepicker__year-option,& .react-datepicker__month-option,& .react-datepicker__month-year-option{line-height:20px;width:100%;display:block;margin-left:auto;margin-right:auto;}& .react-datepicker__year-option:first-of-type,& .react-datepicker__month-option:first-of-type,& .react-datepicker__month-year-option:first-of-type{border-top-left-radius:0.3rem;border-top-right-radius:0.3rem;}& .react-datepicker__year-option:last-of-type,& .react-datepicker__month-option:last-of-type,& .react-datepicker__month-year-option:last-of-type{user-select:none;border-bottom-left-radius:0.3rem;border-bottom-right-radius:0.3rem;}& .react-datepicker__year-option:hover,& .react-datepicker__month-option:hover,& .react-datepicker__month-year-option:hover{background-color:#ccc;}& .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,& .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,& .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming{border-bottom-color:#b3b3b3;}& .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,& .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,& .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous{border-top-color:#b3b3b3;}& .react-datepicker__year-option--selected,& .react-datepicker__month-option--selected,& .react-datepicker__month-year-option--selected{position:absolute;left:15px;}& .react-datepicker__close-icon{background-color:transparent;border:0;cursor:pointer;outline:0;padding:0;vertical-align:middle;position:absolute;height:16px;width:16px;top:25%;right:7px;}& .react-datepicker__close-icon::after{background-color:', ';border-radius:50%;bottom:0;box-sizing:border-box;color:#fff;content:"\0d7";cursor:pointer;font-size:12px;height:16px;width:16px;line-height:1;margin:-8px auto 0;padding:2px;position:absolute;right:0;text-align:center;}& .react-datepicker__today-button{background:#f0f0f0;border-top:1px solid ', ';cursor:pointer;text-align:center;font-weight:bold;padding:5px 0;clear:left;}& .react-datepicker__portal{position:fixed;width:100vw;height:100vh;background-color:rgba(0,0,0,0.8);left:0;top:0;justify-content:center;align-items:center;display:flex;z-index:2147483647;}& .react-datepicker__portal .react-datepicker__day-name,& .react-datepicker__portal .react-datepicker__day,& .react-datepicker__portal .react-datepicker__time-name{width:3rem;line-height:3rem;@media (max-width:400px),(max-height:550px){width:2rem;line-height:2rem;}}& .react-datepicker__portal .react-datepicker__current-month,& .react-datepicker__portal .react-datepicker-time__header{font-size:1.44rem;}& .react-datepicker__portal .react-datepicker__navigation{border:0.81rem solid transparent;}& .react-datepicker__portal .react-datepicker__navigation--previous{border-right-color:#ccc;}& .react-datepicker__portal .react-datepicker__navigation--previous:hover{border-right-color:#b3b3b3;}& .react-datepicker__portal .react-datepicker__navigation--previous--disabled,& .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover{border-right-color:#e6e6e6;cursor:default;}& .react-datepicker__portal .react-datepicker__navigation--next{border-left-color:#ccc;}& .react-datepicker__portal .react-datepicker__navigation--next:hover{border-left-color:#b3b3b3;}& .react-datepicker__portal .react-datepicker__navigation--next--disabled,& .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover{border-left-color:#e6e6e6;cursor:default;}'], function (_ref) {
	var theme = _ref.theme;
	return theme.color.border.normal;
}, function (_ref2) {
	var theme = _ref2.theme;
	return theme.borderRadius.small;
}, function (_ref3) {
	var theme = _ref3.theme;
	return theme.borderRadius.small;
}, function (_ref4) {
	var theme = _ref4.theme;
	return theme.borderRadius.small;
}, function (_ref5) {
	var theme = _ref5.theme;
	return theme.color.border.normal;
}, function (_ref6) {
	var theme = _ref6.theme;
	return theme.color.border.normal;
}, function (_ref7) {
	var theme = _ref7.theme;
	return theme.borderRadius.small;
}, function (_ref8) {
	var theme = _ref8.theme;
	return theme.color.brand;
}, function (_ref9) {
	var theme = _ref9.theme;
	return theme.color.brand;
}, function (_ref10) {
	var theme = _ref10.theme;
	return theme.borderRadius.small;
}, function (_ref11) {
	var theme = _ref11.theme;
	return theme.borderRadius.small;
}, function (_ref12) {
	var theme = _ref12.theme;
	return theme.borderRadius.small;
}, function (_ref13) {
	var theme = _ref13.theme;
	return theme.borderRadius.small;
}, function (_ref14) {
	var theme = _ref14.theme;
	return theme.color.brand;
}, function (_ref15) {
	var theme = _ref15.theme;
	return theme.color.background.light;
}, function (_ref16) {
	var theme = _ref16.theme;
	return theme.color.brand;
}, function (_ref17) {
	var theme = _ref17.theme;
	return (0, _polished.lighten)(theme.color.adjustColor.tiny, theme.color.primary);
}, function (_ref18) {
	var theme = _ref18.theme;
	return theme.color.text.light;
}, function (_ref19) {
	var theme = _ref19.theme;
	return theme.borderRadius.small;
}, function (_ref20) {
	var theme = _ref20.theme;
	return theme.borderRadius.small;
}, function (_ref21) {
	var theme = _ref21.theme;
	return theme.color.brand;
}, function (_ref22) {
	var theme = _ref22.theme;
	return theme.color.border.normal;
});

var StyledReactDatePicker = exports.StyledReactDatePicker = (0, _styledComponents2.default)(_reactDatepicker2.default).withConfig({
	displayName: 'styles__StyledReactDatePicker',
	componentId: 'sc-13rnk96-1'
})(['box-sizing:border-box;outline:none;border:1px solid ', ';border-radius:', ';background:', ';width:100%;color:', ';stroke:', ';padding-top:0;padding-bottom:0;', ' ', ' ', ' ', ''], function (_ref23) {
	var theme = _ref23.theme;
	return theme.color.border.normal;
}, function (_ref24) {
	var theme = _ref24.theme;
	return theme.borderRadius.medium;
}, function (_ref25) {
	var theme = _ref25.theme;
	return theme.color.background.lightest;
}, function (_ref26) {
	var theme = _ref26.theme;
	return theme.color.text.normal;
}, function (_ref27) {
	var theme = _ref27.theme;
	return theme.color.text.normal;
}, _state2.default, function (_ref28) {
	var size = _ref28.size,
	    theme = _ref28.theme;
	return size === "medium" && '\n\t\tline-height: 2rem;\n\t\theight: 2rem;\n\t\tpadding-right: ' + theme.gutter.small + ';\n\t\tpadding-left: ' + theme.gutter.small + ';\n\t\tfont-size: ' + theme.fontSize.medium + ';\n\t' || '';
}, _iconAdjustment2.default, _validation2.default);

exports.default = StyledDatepicker;