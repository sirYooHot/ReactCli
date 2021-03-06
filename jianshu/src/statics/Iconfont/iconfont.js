import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1537601628722'); /* IE9*/
    src: url('./iconfont.eot?t=1537601628722#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1537601628722') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1537601628722#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

