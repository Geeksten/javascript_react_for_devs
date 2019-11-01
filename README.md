# javascript_react_for_devs
https://www.udemy.com/course/js-and-react-for-devs

### DOM
#### what is the DOM
- use `DOM/index.html`
- glorified javascript object that we c an use to manipulate our page
- `command + option + j` for dev tools
- typing `document` in the console gives a html-like representatuon of the nodes on the page
- try `console.dir(document)`
- click `body`
- click `childNodes`

#### what can i do with the DOM
- use `DOM/index.html`
- add and `id` to `h1` and a `class` to `ul`
- 
`<h1 id="header"></h1>`
and
`<ul class="list"></ul>`

- Getting an element
* getElementById()
```
document.getElementById("header")
<h1 id="header">The DOM is cool for many reasons.<h1>
```

* getElementsByClassName()
```
document.getElementsByClassName("list")
HTMLCollection [ul.list]
0: ul.listlength: 1
__proto__: ...
```
- since there is only one item in the list, we can use, 
```
document.getElementsByClassName("list")[0]
<ul class=​"list">​
<li>​You can see how pages are made​</li>​
<li>​You can manipulate it​</li>​
</ul>​
```

* getElementsByTagName()
```
document.getElementsByTagName('li')
HTMLCollection(2) [li, li]
0: li
1: lilength: 2
__proto__: HTMLCollection
```

* `document.querySelector()`; css selectors
- ids like the header id 
```
document.querySelector('#header')
<h1 id=​"header">​The DOM is cool for many reasons.​</h1>​
```

- classes like the list class
```
document.querySelector('.list')
<ul class=​"list">​
<li>​You can see how pages are made​</li>​
<li>​You can manipulate it​</li>​
</ul>​
```

* `document.querySelectorAll()` will give an array for lists
```
document.querySelectorAll('.list')
NodeList [ul.list]
0: ul.listl
ength: 1
__proto__: NodeList
```

* `document.querySelector('.list').children`
- get the list which is the `ul` then get the children `li`
```
document.querySelector('.list').children
HTMLCollection(2) [li, li]
0: li
1: li
length: 2
__proto__: HTMLCollection
```

* `document.querySelector('.list').children[0]`
```
document.querySelector('.list').children[0]
<li>​You can see how pages are made​</li>​
```
- we can manipulate this directly in the DOM by changing the text `<li>​Hola</li>​`

- Creating things in the document
* createElement()
```
var p = document.createElement('p')
p.innerText = 'our new element'
"our new element"
p
<p>​our new element​</p>​
document.body.appendChild(p)
<p>​our new element​</p>​
```
* createAttribute()
```
var att = document.createAttribute('id')
undefined
att.value = 'created'
"created"
p.setAttributeNode(att)
null
```
- then go to the elements tab and we should see
```
<p id="created">our new element</p>
```





