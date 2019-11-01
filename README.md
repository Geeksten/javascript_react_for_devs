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
- ```
<h1 id="header"></h1>
```
and
```
<ul class="list"></ul>
```

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
<ul class=​"list">​<li>​You can see how pages are made​</li>​<li>​You can manipulate it​</li>​</ul>​
```

* getElementsByTagName()
```
document.getElementsByTagName('li')
HTMLCollection(2) [li, li]0: li1: lilength: 2__proto__: HTMLCollection
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
document.querySelector('.list')
<ul class=​"list">​<li>​You can see how pages are made​</li>​<li>​You can manipulate it​</li>​
</ul>​
```





