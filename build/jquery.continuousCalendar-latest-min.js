/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*!
 * Tiny Scrollbar 1.66
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Copyright 2010, Maarten Baijs
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 13 / 11 / 2011
 * Depends on library: jQuery
 * 
 */

(function(window){var requirejs,require,define;(function(e){function c(e,t){return f.call(e,t)}function h(e,t){var n,r,i,s,o,a,f,l,c,h,p=t&&t.split("/"),d=u.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(l=0;l<e.length;l+=1){h=e[l];if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))break;l>0&&(e.splice(l-1,2),l-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(l=n.length;l>0;l-=1){r=n.slice(0,l).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=l;break}}}if(s)break;!a&&v&&v[r]&&(a=v[r],f=l)}!s&&a&&(s=a,o=f),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function p(t,r){return function(){return n.apply(e,l.call(arguments,0).concat([t,r]))}}function d(e){return function(t){return h(t,e)}}function v(e){return function(t){s[e]=t}}function m(n){if(c(o,n)){var r=o[n];delete o[n],a[n]=!0,t.apply(e,r)}if(!c(s,n)&&!c(a,n))throw new Error("No "+n);return s[n]}function g(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function y(e){return function(){return u&&u.config&&u.config[e]||{}}}var t,n,r,i,s={},o={},u={},a={},f=Object.prototype.hasOwnProperty,l=[].slice;r=function(e,t){var n,r=g(e),i=r[0];return e=r[1],i&&(i=h(i,t),n=m(i)),i?n&&n.normalize?e=n.normalize(e,d(t)):e=h(e,t):(e=h(e,t),r=g(e),i=r[0],e=r[1],i&&(n=m(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},i={require:function(e){return p(e)},exports:function(e){var t=s[e];return typeof t!="undefined"?t:s[e]={}},module:function(e){return{id:e,uri:"",exports:s[e],config:y(e)}}},t=function(t,n,u,f){var l,h,d,g,y,b=[],w;f=f||t;if(typeof u=="function"){n=!n.length&&u.length?["require","exports","module"]:n;for(y=0;y<n.length;y+=1){g=r(n[y],f),h=g.f;if(h==="require")b[y]=i.require(t);else if(h==="exports")b[y]=i.exports(t),w=!0;else if(h==="module")l=b[y]=i.module(t);else if(c(s,h)||c(o,h)||c(a,h))b[y]=m(h);else{if(!g.p)throw new Error(t+" missing "+h);g.p.load(g.n,p(f,!0),v(h),{}),b[y]=s[h]}}d=u.apply(s[t],b);if(t)if(l&&l.exports!==e&&l.exports!==s[t])s[t]=l.exports;else if(d!==e||!w)s[t]=d}else t&&(s[t]=u)},requirejs=require=n=function(s,o,a,f,l){return typeof s=="string"?i[s]?i[s](o):m(r(s,o).f):(s.splice||(u=s,o.splice?(s=o,o=a,a=null):s=e),o=o||function(){},typeof a=="function"&&(a=f,f=l),f?t(e,s,o,a):setTimeout(function(){t(e,s,o,a)},4),n)},n.config=function(e){return u=e,u.deps&&n(u.deps,u.callback),n},define=function(e,t,n){t.splice||(n=t,t=[]),!c(s,e)&&!c(o,e)&&(o[e]=[e,t,n])},define.amd={jQuery:!0}})(),define("../lib/almond",function(){}),define("jquery",[],function(){return window.jQuery}),define("DateTime",["require","jquery"],function(e){function r(e){var t=e.split("-");return{year:+t[0],month:+t[1],day:+t[2]}}function i(e){if(e){var t=e.split(":");return{hours:+t[0],minutes:+t[1],seconds:+t[2]||0}}return{hours:0,minutes:0}}var t=e("jquery"),n=function(e,t,n,r,i,s){function o(e,t,n,r,i,s){r=r||0,i=i||0,s=s||0;var o=new Date(e,t-1,n,r,i,s,0);if(o.toString()=="Invalid Date"||t!=o.getMonth()+1||e!=o.getFullYear()||n!=o.getDate()||r!=o.getHours()||i!=o.getMinutes()||s!=o.getSeconds())throw Error("Invalid Date: "+e+"-"+t+"-"+n+" "+r+":"+i+":"+s);return o}if(arguments.length==0)this.date=new Date;else if(e instanceof Date)this.date=new Date(e.getTime());else if(typeof e=="string")this.date=new Date(e);else{if(typeof e!="number")throw Error("None of supported parameters was used for constructor: "+Array.prototype.slice.call(arguments).join(", "));this.date=o(+e,+t,+n,+r,+i,+s)}};return n.SUNDAY=0,n.MONDAY=1,n.TUESDAY=2,n.WEDNESDAY=3,n.THURSDAY=4,n.FRIDAY=5,n.SATURDAY=6,t.each(["getTime","getFullYear","getDate","getDay","getHours","getMinutes","getSeconds","getMilliseconds"],function(e,t){n.prototype[t]=function(){return this.date[t]()}}),n.fromDateTime=function(e,t,r,i,s){return new n(e,t,r,i,s)},n.fromDate=function(e,t,r){return n.fromDateTime(e,t,r,0,0)},n.fromDateObject=function(e){return n.fromMillis(e.getTime())},n.prototype.toISOString=function(){function e(e){return e<10?"0"+e:""+e}return t.map([this.getFullYear(),this.getMonth(),this.getDate()],e).join("-")+"T"+t.map([this.getHours(),this.getMinutes(),this.getSeconds()],e).join(":")},n.prototype.getMonth=function(){return this.date.getMonth()+1},n.fromIsoDate=function(e){var t=/^\d{4}-[01]\d-[0-3]\d(T[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z?))?$/;if(!t.test(e))throw Error(e+" is not valid ISO Date (YYYY-MM-DD or YYYY-MM-DDTHH:MM)");var i=r(e.split("T")[0]);return n.fromDate(i.year,i.month,i.day)},n.fromIsoDateTime=function(e){var t=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z?)/;if(!t.test(e))throw Error(e+" is not valid ISO Date (YYYY-MM-DDTHH:MM)");var s=e.split("T"),o=i(s.length==2&&s[1]),u=r(s[0]);return new n(u.year,u.month,u.day,o.hours,o.minutes,o.seconds)},n.prototype.withResetMS=function(){var e=this.clone();return e.date.setMilliseconds(0),e},n.prototype.withTime=function(e,t){if(typeof e=="string"){var n=e.split(":");e=n[0],t=n[1]}var r=this.clone();return r.date.setHours(e),r.date.setMinutes(t),r.date.setSeconds(0),r.date.setMilliseconds(0),r},n.SECOND=1e3,n.MINUTE=60*n.SECOND,n.HOUR=60*n.MINUTE,n.DAY=24*n.HOUR,n.WEEK=7*n.DAY,n.now=function(){return typeof n._now=="undefined"&&(n._now=new n),n._now},n.getDaysInMonth=function(e,t){if(t>12||t<1)throw new Error("Month must be between 1-12");var r=e*12+t;return n.fromDate(Math.floor(r/12),r%12+1,1).minusDays(1).getDate()},n.getDayInYear=function(e,t,r){return n.fromDate(e,1,1).distanceInDays(n.fromDate(e,t,r))+1},n.prototype.getDaysInMonth=function(){return n.getDaysInMonth(this.getFullYear(),this.getMonth())},n.prototype.getDayInYear=function(){return n.getDayInYear(this.getFullYear(),this.getMonth(),this.getDate())},n.prototype.plusDays=function(e){var t=this.clone(),r=this.getHours();t.date.setTime(this.getTime()+e*n.DAY);var i=r-t.getHours();return i!=0&&(i>12&&(i-=24),i<-12&&(i+=24),t.date.setTime(t.getTime()+i*n.HOUR)),t},n.prototype.minusDays=function(e){return this.plusDays(-e)},n.prototype.compareTo=function(e){if(!e)return 1;var t=this.getTime(),n=e.getTime();return t<n?-1:t>n?1:0},n.prototype.isToday=function(){return this.equalsOnlyDate(n.now())},n.prototype.getWeekInYear=function(e){if(e!="US"&&e!="ISO")throw"Week numbering system must be either US or ISO, was "+e;var t=(new Date(this.getFullYear(),0,1)).getDay();if(e=="US")return Math.ceil((this.getDayInYear()+t)/7);var r=4,i=this.getDay();i==0&&(i=7),t==0&&(t=7);if(this.getMonth()==12&&this.getDate()>=29&&this.getDate()-i>27)return 1;if(this.getMonth()==1&&this.getDate()<4&&i>r)return(new n(new Date(this.getFullYear()-1,11,31))).getWeekInYear("ISO");var s=Math.ceil((this.getDayInYear()+t-1)/7);return t>r&&s--,s},n.prototype.clone=function(){return new n(this.date)},n.fromMillis=function(e){return new n(new Date(e))},n.prototype.isOddMonth=function(){return this.getMonth()%2==0},n.prototype.equalsOnlyDate=function(e){return e?this.getMonth()==e.getMonth()&&this.getDate()==e.getDate()&&this.getFullYear()==e.getFullYear():!1},n.prototype.isBetweenDates=function(e,t){if(e.getTime()>t.getTime())throw Error("start date can't be after end date");return this.compareTo(e)>=0&&this.compareTo(t)<=0},n.prototype.firstDateOfMonth=function(){return n.fromDate(this.getFullYear(),this.getMonth(),1)},n.prototype.lastDateOfMonth=function(){return n.fromDate(this.getFullYear(),this.getMonth(),this.getDaysInMonth())},n.prototype.distanceInDays=function(e){var t=parseInt(this.getTime()/n.DAY,10),r=parseInt(e.getTime()/n.DAY,10);return r-t},n.prototype.withWeekday=function(e){return this.plusDays(e-this.getDay())},n.prototype.getOnlyDate=function(){return n.fromDate(this.getFullYear(),this.getMonth(),this.getDate())},n.prototype.isWeekend=function(){return this.getDay()==6||this.getDay()==0},n.prototype.toString=function(){return this.toISOString()},n.prototype.getFirstDateOfWeek=function(e){var t=e?e.firstWeekday:n.MONDAY;return t<this.getDay()?this.plusDays(t-this.getDay()):t>this.getDay()?this.plusDays(t-this.getDay()-7):this.clone()},n.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],n.y2kYear=50,n.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},n}),define("DateFormat",["require","./DateTime"],function(require){var DateTime=require("./DateTime"),DateFormat={};return DateFormat.parseFunctions={count:0},DateFormat.parseRegexes=[],DateFormat.formatFunctions={count:0},DateFormat.hoursAndMinutes=function(e,t){return(Math.round((e+t/60)*100)/100).toString()},DateFormat.format=function(e,t,n){DateFormat.formatFunctions[t]==null&&DateFormat.createNewFormat(e,t,n);var r=DateFormat.formatFunctions[t];return e[r]()},DateFormat.shortDateFormat=function(e,t){return DateFormat.format(e,t?t.shortDateFormat:"n/j/Y",t)},DateFormat.formatRange=function(e,t){return e._hasTimes?t.daysLabel(e.days())+" "+t.hoursLabel(e.hours(),e.minutes()):DateFormat.shortDateFormat(e.start,t)+" - "+DateFormat.shortDateFormat(e.end,t)},DateFormat.formatDefiningRangeDuration=function(e,t){var n=parseInt(e.days()/360,10);if(n>0)return t.yearsLabel(n);var r=parseInt(e.days()/30,10);return r>0?t.monthsLabel(r):t.daysLabel(e.days())},DateFormat.getGMTOffset=function(e){return(e.date.getTimezoneOffset()>0?"-":"+")+DateFormat.leftPad(Math.floor(e.getTimezoneOffset()/60),2,"0")+DateFormat.leftPad(e.getTimezoneOffset()%60,2,"0")},DateFormat.leftPad=function(e,t,n){var r=String(e);n==null&&(n=" ");while(r.length<t)r=n+r;return r},DateFormat.escape=function(e){return e.replace(/('|\\)/g,"\\$1")},DateFormat.parse=function(e){if(e=="today")return DateTime.now();var t=new Date(e);if(isNaN(t.getTime()))throw Error('Could not parse date from "'+e+'"');return new DateTime(t)},DateFormat.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",FiShortDatePattern:"j.n.Y",FiWeekdayDatePattern:"D j.n.Y",FiWeekdayDateTimePattern:"D j.n.Y k\\lo G:i",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"},DateFormat.parseTime=function(e){function r(e){if(e.indexOf(".")!=-1)return e.split(".");switch(e.length){case 4:return[e.slice(0,2),e.slice(2,4)];case 3:return[e.slice(0,1),e.slice(1,3)];case 2:return[e,0];default:return[-1,-1]}}function i(e){return!isNaN(e)&&e>=0&&e<=59}function s(e){return!isNaN(e)&&e>=0&&e<=23}var t=r(e.replace(/:|,/i,".")),n=[+t[0],+t[1]];return s(n[0])&&i(n[1])?n:null},DateFormat.createNewFormat=function(dateTime,format,locale){var funcName="format"+DateFormat.formatFunctions.count++;DateFormat.formatFunctions[format]=funcName;var code="DateTime.prototype."+funcName+" = function(){return ",special=!1,ch="";for(var i=0;i<format.length;++i)ch=format.charAt(i),!special&&ch=="\\"?special=!0:special?(special=!1,code+="'"+DateFormat.escape(ch)+"' + "):code+=DateFormat.getFormatCode(ch,locale);eval(code.substring(0,code.length-3)+";}")},DateFormat.getFormatCode=function(e){switch(e){case"d":return"DateFormat.leftPad(this.getDate(), 2, '0') + ";case"D":return"locale.shortDayNames[this.getDay()] + ";case"j":return"this.getDate() + ";case"l":return"locale.dayNames[this.getDay()] + ";case"w":return"this.getDay() + ";case"z":return"this.getDayInYear() + ";case"F":return"locale.monthNames[this.getMonth()-1] + ";case"m":return"DateFormat.leftPad(this.getMonth(), 2, '0') + ";case"M":return"locale.monthNames[this.getMonth()-1].substring(0, 3) + ";case"n":return"(this.getMonth()) + ";case"t":return"this.getDaysInMonth() + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"DateFormat.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"DateFormat.leftPad(this.getHours(), 2, '0') + ";case"i":return"DateFormat.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"DateFormat.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"DateFormat.getGMTOffset(this) + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+DateFormat.escape(e)+"' + "}},DateFormat}),define("DateLocale",["require","./DateTime","./DateFormat"],function(e){var t=e("./DateTime"),n=e("./DateFormat"),r={FI:{id:"FI",monthNames:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],dayNames:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],shortDayNames:["su","ma","ti","ke","to","pe","la"],yearsLabel:function(e){return e+" "+(e=="1"?"vuosi":"vuotta")},monthsLabel:function(e){return e+" "+(e=="1"?"kuukausi":"kuukautta")},daysLabel:function(e){return e+" "+(e=="1"?"päivä":"päivää")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"tunti":"tuntia")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\lo G:i",firstWeekday:t.MONDAY},EN:{id:"EN",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],yearsLabel:function(e){return e+" "+(e=="1"?"Year":"Years")},monthsLabel:function(e){return e+" "+(e=="1"?"Months":"Months")},daysLabel:function(e){return e+" "+(e=="1"?"Day":"Days")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t);return r+" "+(r=="1"?"Hour":"Hours")},shortDateFormat:"n/j/Y",weekDateFormat:"D n/j/Y",dateTimeFormat:"D n/j/Y G:i",firstWeekday:t.SUNDAY},AU:{id:"AU",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],yearsLabel:function(e){return e+" "+(e=="1"?"Year":"Years")},monthsLabel:function(e){return e+" "+(e=="1"?"Months":"Months")},daysLabel:function(e){return e+" "+(e=="1"?"Day":"Days")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t);return r+" "+(r=="1"?"Hour":"Hours")},shortDateFormat:"j/n/Y",weekDateFormat:"D j/n/Y",dateTimeFormat:"D j/n/Y G:i",firstWeekday:t.SUNDAY},ET:{id:"ET",monthNames:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],dayNames:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],shortDayNames:["P","E","T","K","N","R","L"],yearsLabel:function(e){return e+" "+(e=="1"?"Aasta":"Aastat")},monthsLabel:function(e){return e+" "+(e=="1"?"Kuu":"Kuud")},daysLabel:function(e){return e+" "+(e=="1"?"Päev":"Päeva")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"Tund":"Tundi")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\l G:i",firstWeekday:t.MONDAY},RU:{id:"RU",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayNames:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDayNames:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],yearsLabel:function(e){return e+" "+(e=="1"?"Год":"Года")},monthsLabel:function(e){return e+" "+(e=="1"?"Месяц":"Месяца")},daysLabel:function(e){return e+" "+(e=="1"?"День":"Дня")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"Минута":"Минуты")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\lo G:i",firstWeekday:t.MONDAY},SV:{id:"SV",monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],shortDayNames:["Sö","Må","Ti","On","To","Fr","Lö"],yearsLabel:function(e){return e+" "+(e=="1"?"År":"År")},monthsLabel:function(e){return e+" "+(e=="1"?"Månad":"Månader")},daysLabel:function(e){return e+" "+(e=="1"?"Dag":"Dagar")},hoursLabel:function(e,t){var r=n.hoursAndMinutes(e,t).replace(".",",");return r+" "+(r=="1"?"Minut":"Minuter")},shortDateFormat:"j.n.Y",weekDateFormat:"D j.n.Y",dateTimeFormat:"D j.n.Y k\\lo G:i",firstWeekday:t.MONDAY}};return r.fromArgument=function(e){return typeof e=="string"?r[e.toUpperCase()]:e},r}),define("DateRange",["require","jquery","./DateTime","./DateFormat"],function(e){function i(e,t){if(!e||!t)throw"two dates must be specified, date1="+e+", date2="+t;this.start=e.compareTo(t)>0?t:e,this.end=e.compareTo(t)>0?e:t,this._days=0,this._hours=0,this._minutes=0,this._valid=!0}var t=e("jquery"),n=e("./DateTime"),r=e("./DateFormat");return i.prototype={_setDaysHoursAndMinutes:function(){if(this._hasTimes){var e=parseInt(this.end.getTime()-this.start.getTime(),10);this._days=parseInt(e/n.DAY,10),e-=this._days*n.DAY,this._hours=parseInt(e/n.HOUR,10),e-=this._hours*n.HOUR,this._minutes=parseInt(e/n.MINUTE,10)}},_dateWithTime:function(e,t){return e.withTime(t[0],t[1])},hours:function(){return this._hours},minutes:function(){return this._minutes},hasDate:function(e){return e.isBetweenDates(this.start,this.end)},isValid:function(){return this._valid&&this.end.getTime()-this.start.getTime()>=0},days:function(){return this._hasTimes?this._days:Math.round(this.start.distanceInDays(this.end)+1)},shiftDays:function(e){return new i(this.start.plusDays(e),this.end.plusDays(e))},expandTo:function(e){var t=this.start.clone(),n=this.end.clone();return e.compareTo(this.start)<0?t=e:e.compareTo(this.end)>0&&(n=e),new i(t,n)},expandDaysTo:function(e){return new i(this.start,this.start.plusDays(e-1))},hasValidSize:function(e){return e<0||this.days()>=e},hasValidSizeAndEndsOnWorkWeek:function(e){return this.hasValidSize(e)&&this.hasEndsOnWeekend()},and:function(e){var t=this.start.compareTo(e.start)>0?this.start:e.start,n=this.end.compareTo(e.end)>0?e.end:this.end;return t.compareTo(n)<0?new i(t,n):i.emptyRange()},isInside:function(e){return this.start.compareTo(e.start)>=0&&this.end.compareTo(e.end)<=0},hasEndsOnWeekend:function(){return this.start.isWeekend()||this.end.isWeekend()},withTimes:function(e,t){var n=r.parseTime(e),i=r.parseTime(t),s=this.clone();return n&&i?(s._valid=!0,s._hasTimes=!0,s.start=this._dateWithTime(this.start,n),s.end=this._dateWithTime(this.end,i),s._setDaysHoursAndMinutes()):s._valid=!1,s},clone:function(){return new i(this.start,this.end)},toString:function(){return["DateRange:",this.start.toString(),"-",this.end.toString(),this._days,"days",this._hours,"hours",this._minutes,"minutes",this._valid?"valid":"invalid"].join(" ")},isPermittedRange:function(e,t,n){return this.hasValidSize(e)&&(!t||!this.hasEndsOnWeekend())&&this.isInside(n)},shiftInside:function(e){if(this.days()>e.days())return i.emptyRange();var t=this.start.distanceInDays(e.start),n=this.end.distanceInDays(e.end);return t>0?this.shiftDays(t):n<0?this.shiftDays(n):this}},i=t.extend(i,{emptyRange:function(){function e(){this.start=null,this.end=null,this.days=function(){return 0},this.shiftDays=t.noop,this.hasDate=function(){return!1},this.clone=function(){return i.emptyRange()},this.expandDaysTo=function(){return this},this.hasEndsOnWeekend=function(){return!1},this.isPermittedRange=function(){return!0}}return new e},rangeWithMinimumSize:function(e,t,n,r){function u(){return t&&e.days()<=t}function a(e){return-((e+1)%7+1)}if(u()){var s=e.expandDaysTo(t);if(n&&s.hasEndsOnWeekend()){var o=s.shiftDays(a(s.end.getDay())).shiftInside(r);while(!o.isPermittedRange(t,n,r)||o.end.compareTo(r.end)>0){if(!o.isPermittedRange(t,!1,r))return i.emptyRange();o=o.shiftDays(1)}s=o}return s.isPermittedRange(t,!1,r)?s:i.emptyRange()}return e}}),i}),define("CalendarBody",["require","jquery","./DateFormat","./DateLocale","./DateRange","./DateTime"],function(e){var t=e("jquery"),n=e("./DateFormat"),r=e("./DateLocale"),i=e("./DateRange"),s=e("./DateTime");return function(e,r,i,o,u,a){function m(){var e=t('<tr><th class="month"></th><th class="week">&nbsp;</th>');return t(i.dayNames).each(function(n){var r=t("<th>").append(i.shortDayNames[(n+i.firstWeekday)%7]).addClass("weekDay");e.append(r)}),t("<thead>").append(e)}function g(e){var t=n.format(s.now(),"Ymd",i);t in e&&T(e[t]).addClass("today").wrapInner("<div>")}function y(){function o(e,t,n){e.push("<tr>"),e.push(a(t,n)),e.push(c(t));for(var r=0;r<7;r++){var i=t.plusDays(r);e.push(u(i))}e.push("</tr>")}function u(e){var t='<td class="'+b(e)+'" date-cell-index="'+l.length+'">'+e.getDate()+"</td>";return f[n.format(e,"Ymd",i)]=l.length,l.push(e),t}function a(e,t){var n='<th class="month '+w(e);return t||e.getDate()<=7?(n+=' monthName">',n+=i.monthNames[e.getMonth()-1]):(n+='">',e.getDate()<=14&&e.getMonth()==1&&(n+=e.getFullYear())),n+"</th>"}function c(e){return'<th class="week '+w(e)+'">'+e.getWeekInYear("ISO")+"</th>"}var e=r.start.getFirstDateOfWeek(i),t=!0,s=[];while(e.compareTo(r.end)<=0)o(s,e.clone(),t),t=!1,e=e.plusDays(7);return"<tbody>"+s.join("")+"</tbody>"}function b(e){return t.trim(["date",w(e),E(e),S(e),x(e)].sort().join(" "))}function w(e){return e.isOddMonth()?"odd":""}function E(e){var t=u&&e.isWeekend(),n=a[e.getOnlyDate().date],i=!r.hasDate(e);return i||t||n?"disabled":""}function S(e){return e.isToday()?"today":""}function x(e){return e.getDay()==0?"holiday":""}function T(e){return t(d[e])}var f={},l=[],c=t('<table class="calendarHeader">').append(m()),h=t('<table class="calendarBody">').append(y()),p=t('<div class="calendarScrollContent">').append(h);e.append(c),o?(h.addClass("overview"),p.addClass("viewport"),e.append(t('<div class="tinyscrollbar"></div>').append('<div class="scrollbar"> <div class="track"> <div class="thumb"> <div class="end"></div> </div> </div> </div>').append(p))):e.append(p);var d=t("td.date",e).get();g(f);var v=t("th.month",c);return{bodyTable:h,scrollContent:p,dateCells:d,yearTitle:v,dateCellMap:f,dateCellDates:l,dateStyles:b,getDateCell:T}}}),define("RangeEvents",["require","jquery","./DateFormat","./DateLocale","./DateRange","./DateTime"],function(e){var t=e("jquery"),n=e("./DateFormat"),r=e("./DateLocale"),i=e("./DateRange"),s=e("./DateTime");return function(e,r,o,u,a,f,l,c,h,p,d,v,m,g){function x(){b=v&&m?new i(v,m,u):i.emptyRange(u)}function T(e,n){t("span.rangeLengthLabel",e).text(u.daysLabel(b.days())),n.addClass(a.selectWeek?"weekRange":"freeRange"),n.mousedown(N).mouseover(L).mouseup(O),k(n.get(0))}function N(e){function o(e){return F(e)&&R(e)}function c(e,t){return a.selectWeek?o(e)||I(e):I(e)||q(e)||t}function h(e,n){if(a.selectWeek&&o(e)||I(e)){S=E.NONE;var r=f(t(e).parent().children(".date").get(0));return p(r)}if(q(e)){S=E.NONE;var s=f(t(e).siblings(".date").get(0));return new i(s.firstDateOfMonth(),s.lastDateOfMonth(),u)}return n&&b.days()>0&&o(e)?(S=E.NONE,b=b.expandTo(f(e)),b):b}function p(e){var t=e,n=e.plusDays(6);return a.disableWeekends&&(t=e.withWeekday(s.MONDAY),n=e.withWeekday(s.FRIDAY)),(new i(t,n,u)).and(l)}var n=e.target,r=e.shiftKey;if(c(n,r)){b=h(n,r);return}S=E.CREATE_OR_RESIZE,y=f(n);if(y.equalsOnlyDate(b.end)){y=b.start;return}if(y.equalsOnlyDate(b.start)){y=b.end;return}if(b.hasDate(y)){S=E.MOVE;return}o(n)&&C()}function C(){b=new i(y,y,u)}function k(e){t(e).css("MozUserSelect","none"),t(e).bind("selectstart",function(){return!1}),t(e).mousedown(function(){return!1})}function L(e){if(S==E.NONE)return;var t=f(e.target),n={move:function(){var e=y.distanceInDays(t),n=b.shiftDays(e).and(l);A(n)&&(y=t,b=n)},create:function(){var n=new i(y,t,u);R(e.target)&&A(n)&&(b=n)}};n[S](),_()}function A(e){return e.isPermittedRange(a.minimumRange,a.disableWeekends,l)}function O(){S=E.NONE,M()&&(b=i.emptyRange()),_(),B()}function M(){for(var e=0;e<g.length;e++)if(b.hasDate(new s(g[e])))return!0;return!1}function _(){b=i.rangeWithMinimumSize(b,a.minimumRange,a.disableWeekends,l),D(b),t("span.rangeLengthLabel",e).text(u.daysLabel(b.days()))}function D(n){t("td.selected",e).removeClass("selected").removeClass("rangeStart").removeClass("rangeEnd").removeClass("invalidSelection"),P(n),w=n.clone()}function P(i){function f(e){return r.dateCellMap[n.format(e,"Ymd",u)]}if(i.days()==0)return;var s=f(i.start),o=f(i.end);for(var a=s;a<=o;a++)r.getDateCell(a).get(0).className=H(r.dateCellDates[a],i.start,i.end).join(" ");M()&&t("td.selected",e).addClass("invalidSelection")}function H(e,t,n){var i=[r.dateStyles(e)];return e.equalsOnlyDate(n)?i.concat("selected rangeEnd"):e.equalsOnlyDate(t)?i.concat("selected rangeStart"):e.isBetweenDates(t,n)?i.concat("selected"):i}function B(){M()&&(b=i.emptyRange(),setTimeout(function(){D(b)},200));var n=d(b.start),r=d(b.end);e.data("calendarRange",b),c(n),h(r),j(),a.selectWeek&&p.close(t("td.selected",e).first()),o(b)}function j(){b||x();if(b.start&&b.end){var r=u.weekDateFormat;t("span.startDateLabel",e).text(n.format(b.start,r,u)),t("span.endDateLabel",e).text(n.format(b.end,r,u)),t("span.separator",e).show()}else t("span.separator",e).hide()}function F(e){return t(e).closest("[date-cell-index]").hasClass("date")}function I(e){return t(e).hasClass("week")}function q(e){return t(e).hasClass("month")}function R(e){return!t(e).hasClass("disabled")}var y=null,b,w,E={CREATE_OR_RESIZE:"create",MOVE:"move",NONE:"none"},S=E.NONE;return{showInitialSelection:j,initEvents:function(){x(),w=b.clone(),T(e,r.bodyTable),_()},addRangeLengthLabel:function(){if(t(".rangeLengthLabel",e).isEmpty()){var n=t('<div class="label"><span class="rangeLengthLabel"></span></div>');t(".continuousCalendar",e).append(n)}},addEndDateLabel:function(e){e.append('<span class="separator"> - </span>').append('<span class="endDateLabel"></span>')},performTrigger:function(){e.data("calendarRange",b),o(b)}}}}),function(e){function t(t,n){function m(){return r.update(),y(),r}function g(){f.obj.css(c,p/u.ratio),o.obj.css(c,-p),v.start=f.obj.offset()[c];var e=h.toLowerCase();u.obj.css(e,a[n.axis]),a.obj.css(e,a[n.axis]),f.obj.css(e,f[n.axis])}function y(){f.obj.bind("mousedown",b),f.obj[0].ontouchstart=function(e){return e.preventDefault(),f.obj.unbind("mousedown"),b(e.touches[0]),!1},a.obj.bind("mouseup",S),n.scroll&&this.addEventListener?(i[0].addEventListener("DOMMouseScroll",w,!1),i[0].addEventListener("mousewheel",w,!1)):n.scroll&&(i[0].onmousewheel=w)}function b(t){v.start=l?t.pageX:t.pageY;var n=parseInt(f.obj.css(c),10);return d.start=n=="auto"?0:n,e(document).bind("mousemove",S),document.ontouchmove=function(t){e(document).unbind("mousemove"),S(t.touches[0])},e(document).bind("mouseup",E),f.obj.bind("mouseup",E),f.obj[0].ontouchend=document.ontouchend=function(t){e(document).unbind("mouseup"),f.obj.unbind("mouseup"),E(t.touches[0])},!1}function w(t){if(!(o.ratio>=1)){i.trigger("scroll"),t=t||window.event;var r=t.wheelDelta?t.wheelDelta/120:-t.detail/3;p-=r*n.wheel,p=Math.min(o[n.axis]-s[n.axis],Math.max(0,p)),f.obj.css(c,p/u.ratio),o.obj.css(c,-p),t=e.event.fix(t),t.preventDefault()}}function E(){return e(document).unbind("mousemove",S),e(document).unbind("mouseup",E),f.obj.unbind("mouseup",E),document.ontouchmove=f.obj[0].ontouchend=document.ontouchend=null,!1}function S(e){return i.trigger("scroll"),o.ratio>=1||(d.now=Math.min(a[n.axis]-f[n.axis],Math.max(0,d.start+((l?e.pageX:e.pageY)-v.start))),p=d.now*u.ratio,o.obj.css(c,-p),f.obj.css(c,d.now)),!1}var r=this,i=t,s={obj:e(".viewport",t)},o={obj:e(".overview",t)},u={obj:e(".scrollbar",t)},a={obj:e(".track",u.obj)},f={obj:e(".thumb",u.obj)},l=n.axis=="x",c=l?"left":"top",h=l?"Width":"Height",p,d={start:0,now:0},v={};return this.update=function(e){var t=n.axis;s[t]=s.obj[0]["offset"+h],o[t]=o.obj[0]["scroll"+h];var r=o[t],i=s[t];o.ratio=i/r,u.obj.toggleClass("disable",o.ratio>=1),a[t]=n.size=="auto"?i:n.size;var l=a[t];f[t]=Math.min(l,Math.max(0,n.sizethumb=="auto"?l*o.ratio:n.sizethumb));var c=f[t];u.ratio=n.sizethumb=="auto"?r/l:(r-i)/(l-c),p=e=="relative"&&o.ratio<=1?Math.min(r-i,Math.max(0,p)):0,p=e=="bottom"&&o.ratio<=1?r-i:isNaN(parseInt(e,10))?p:parseInt(e,10),g()},m()}e.tiny=e.tiny||{},e.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:!0,size:"auto",sizethumb:"auto"}},e.fn.tinyscrollbar=function(n){var n=e.extend({},e.tiny.scrollbar.options,n);return this.each(function(){e(this).data("tsb",new t(e(this),n))}),this},e.fn.tinyscrollbar_update=function(t){return e(this).data("tsb").update(t)}}(jQuery),define("jquery.tinyscrollbar",function(){}),define("jquery.continuousCalendar",["require","jquery","./DateFormat","./DateLocale","./DateRange","./DateTime","./CalendarBody","./RangeEvents","jquery.tinyscrollbar"],function(e){var t=e("jquery"),n=e("./DateFormat"),r=e("./DateLocale"),i=e("./DateRange"),s=e("./DateTime"),o=e("./CalendarBody"),u=e("./RangeEvents");e("jquery.tinyscrollbar"),t.continuousCalendar={version:"4.0.0",released:"2013-06-02"},t.fn.continuousCalendar=function(e){function a(e){function C(){T=f.disabledDates?f.disabledDates.split(" "):[],N=f.disabledDates?M(T):{},x=A(f),b=D(f.isPopup),w=_(J()),f.fadeOutDuration=+f.fadeOutDuration,g=P(),g.click(function(e){e.stopPropagation()}),t(".startDateLabel",v).isEmpty()&&H(v,b,w),b.initUI(),w.showInitialSelection(),w.performTrigger()}function k(){f.customScroll&&(E=t(".tinyscrollbar",v).tinyscrollbar())}function L(){if(S.scrollContent)return;S=t.extend(S,o(g,x,l,f.customScroll,f.disableWeekends,N)),O(),b.initState(),w.addRangeLengthLabel(),w.initEvents(),B()}function A(e){var t=(c||s.now()).getFirstDateOfWeek(l),r=e.firstDate,o=e.lastDate,u=r?n.parse(r,l):t.minusDays(e.weeksBefore*7),a=o?n.parse(o,l):t.plusDays(e.weeksAfter*7+6);return new i(u,a)}function O(){if(f.customScroll)E||k(),E.bind("scroll",j);else{var e=!1;S.scrollContent.scroll(function(){e=!0}),setInterval(function(){e&&(e=!1,j())},250)}}function M(e){var r={};return t.each(e,function(e,t){r[n.parse(t).date]=!0}),r}function _(e){function i(){t(".date",v).bind("click",function(){var e=t(this);if(e.hasClass("disabled"))return;t("td.selected",v).removeClass("selected"),e.addClass("selected");var r=z(e.get(0));f.startField.val(n.shortDateFormat(r,l)),s(n.format(r,l.weekDateFormat,l)),b.close(this),U(r)})}function s(e){t("span.startDateLabel",v).text(e)}var r={showInitialSelection:function(){c&&s(n.format(c,l.weekDateFormat,l))},initEvents:function(){i();var e=c&&n.format(c,"Ymd",l);e in S.dateCellMap&&S.getDateCell(S.dateCellMap[e]).addClass("selected")},addRangeLengthLabel:t.noop,addEndDateLabel:t.noop,performTrigger:function(){v.data("calendarRange",c),U(c)}};return e?u(v,S,U,l,f,z,x,W,X,b,V,c,h,T):r}function D(e){var n={initUI:function(){g.addClass("popup").hide();var e=t('<a href="#" class="calendarIcon">'+p.getDate()+"</a>").click(q);v.prepend("<div></div>"),v.prepend(e)},initState:t.noop,getContainer:function(e){return t('<div class="popUpContainer">').append(e)},close:function(e){q.call(e)},addDateLabelBehaviour:function(e){e.addClass("clickable"),e.click(q)}},r={initUI:L,initState:F,getContainer:function(e){return e},close:t.noop,addDateLabelBehaviour:t.noop};return e?n:r}function P(){var e=t(".continuousCalendar",v);if(e.exists())return e;var n=t('<div class="continuousCalendar">');return v.append(b.getContainer(n)),n}function H(e,n,r){var i=t('<div class="label"><span class="startDateLabel"></span></div>');r.addEndDateLabel(i),e.prepend(i),n.addDateLabelBehaviour(i.children())}function B(){var e=t(".selected",S.scrollContent).get(0)||t(".today",S.scrollContent).get(0);if(e){var n=e.offsetTop-(S.scrollContent.height()-e.offsetHeight)/2;if(f.customScroll){var r=S.bodyTable.height(),i=r-S.scrollContent.height(),s=n>i?i:n;E.tinyscrollbar_update(s>0?s:0)}else S.scrollContent.scrollTop(n)}}function j(){var e=S.scrollContent.get(0),n=t("table",e).get(0),r=f.customScroll?-t(".overview",g).position().top:e.scrollTop,i=parseInt(r/m,10),s=z(n.rows[i].cells[2]);S.yearTitle.text(s.getFullYear())}function F(){k(),I(),j()}function I(){m=parseInt(S.bodyTable.height()/t("tr",S.bodyTable).size(),10)}function q(){return L(),g.is(":visible")?(g.fadeOut(f.fadeOutDuration),t(document).unbind("click.continuousCalendar")):(g.show(),y&&(k(),I(),j(),y=!1),B(),t(document).bind("click.continuousCalendar",q)),!1}function R(e){return e.length>0&&e.val().length>0?n.parse(e.val()):null}function U(e){f.callback.call(v,e),v.trigger("calendarChange",e)}function z(e){return S.dateCellDates[t(e).closest("[date-cell-index]").attr("date-cell-index")]}function W(e){f.startField.val(e)}function X(e){f.endField.val(e)}function V(e){return e?n.shortDateFormat(e,l):""}function J(){return f.endField&&f.endField.length>0}var a={weeksBefore:26,weeksAfter:26,firstDate:null,lastDate:null,startField:t("input.startDate",this),endField:t("input.endDate",this),isPopup:!1,selectToday:!1,locale:r.EN,disableWeekends:!1,disabledDates:null,minimumRange:-1,selectWeek:!1,fadeOutDuration:0,callback:t.noop,customScroll:!1,theme:""},f=t.extend({},a,e),l=r.fromArgument(f.locale),c=R(f.startField),h=R(f.endField),p=s.now();if(f.selectToday){var d=V(p);c=p,h=p,W(d),X(d)}var v=this,m,g,y=!0,b,w,E,S={},x,T,N;t(this).addClass("continuousCalendarContainer").addClass(f.theme).append("&nbsp;"),C()}return this.each(function(){a.call(t(this),e)})},t.fn.calendarRange=function(){return t(this).data("calendarRange")},t.fn.exists=function(){return this.length>0},t.fn.isEmpty=function(){return this.length==0}}),require(["jquery.continuousCalendar"]),require("jquery.continuousCalendar"),window.DateFormat=require("DateFormat"),window.DateLocale=require("DateLocale"),window.DateTime=require("DateTime"),window.DateRange=require("DateRange"),window.CalendarBody=require("CalendarBody"),window.RangeEvents=require("RangeEvents")})(window);