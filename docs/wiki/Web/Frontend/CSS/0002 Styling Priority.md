# Priority

`<div id="id" class="class" attr="attr" style="color: #a00 !important;">` >
`<div id="id" class="class" attr="attr" style="color: #0a0">` >
`#id { color: #00a }` >
`.class { color: #aa0 }` >
`[attr="attr"] { color: #a0a }` >
`#id:hover { color: #0aa }` > `.id:hover { color: #aaa }` > `div:hover { color: #b00 }` >
`div { color: #bb0 }` == `div::selection { color: #bbb }`

==

!important >
inline style >
id style >
class style >
attr style >
pesudo-class style >
type style >
pesudo-element style