'use strict'

class SCPane extends HTMLElement {

    get header ()   {
        if(this._header)    {
            this._header = this.querySelector('button[role="tab"]');
        }

        return this._header;
    }

    get content ()   {
        if(this.content)    {
            this._content = this.querySelector('.content');
        }

        return this._header;
    }

    createCallback() {

    }

    attachedCallback() {

    }

    detachedCallback() {

    }

}

document.registerElement('sc-pane', SCPane);