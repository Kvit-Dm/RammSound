export default class ElementMaker {
    elm;

    constructor(parentElm,
                tagName = 'div',
                classList = '',
                content = '',
                attributeName = '',
                attributeValue = '' ) {
        if (!tagName){
            tagName = 'div'
        }
        const elm = document.createElement(tagName);

        if (classList) {
            elm.classList = classList;
        }

        if (parentElm){
            parentElm.append(elm);
        }

        if(content){
            elm.textContent = content;
        }

        if (attributeName) {
            elm.setAttribute(attributeName, attributeValue)
        }
        this.elm = elm;

    }
    remove() {
        this.elm.remove()
    };

    setOnClick(onclick) {
        this.elm.onclick = onclick
    }

}


