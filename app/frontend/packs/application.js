import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "styles";
import "scripts";

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// vue.js

import Vue from 'vue/dist/vue.esm'
import List from 'components/list'


document.addEventListener("turbolinks:load", function(event) {
    let el = document.querySelector('#board');

    if (el) {
        new Vue({
            el: el, // #board 
            data: {
                lists: JSON.parse(el.dataset.lists)
            },
            components: { List: List }
        });
    }
})

