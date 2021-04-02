//document.body.childNodes - все узлы Sibling - сосед, чтоббы получить элемент - ставим Element, 

//console.log(document.querySelector('#current').parentNode);

//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}