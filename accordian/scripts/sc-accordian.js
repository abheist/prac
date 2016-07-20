'use strict'

class SCAccordian extends HTMLElement   {
    createCallback  ()  {
        this._panes = null;
    }

    attachedCallback () {
        this._panes = this.querySelectorAll('sc-pane');
        this._calculateGeometries();
    }

    detachedCallback () {
        this._panes = null;
    }

    _calculateGeometries () {
        if (this._panes.length === 0)
            return;

        this._headerHeight = this._panes[0].header.offsetHeight;
        this._availableHeight = this.offsetHeight - (this._panes.length * this._headerHeight);


        this._panes.forEach((pane, index) => {
            pane.
            
            // if (pane.getAttribute('aria-expanded')) {

            // }
        });
    }
}

document.registerElement('sc-accordian', SCAccordian);