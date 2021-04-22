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

import Vue from 'vue/dist/vue.esm';
import List from 'components/list';
import draggable from 'vuedraggable';

document.addEventListener("turbolinks:load", function(event) {
    let el = document.querySelector('#board');

    if (el) {
        new Vue({
            el: el, // #board 
            data: {
                lists: JSON.parse(el.dataset.lists)
            },
            components: { List: List, draggable: draggable },
            methods: {
                listMoved(event){
                    console.log(event);

                    let data = new FormData();
                    data.append("list[position]", event.moved.newIndex + 1);
                    // console.log(this.lists[event.moved.newIndex].id);

                    Rails.ajax({
                        // /lists/2/move
                        url: `/lists/${this.lists[event.moved.newIndex].id}/move`,
                        type: 'PUT',
                        data: data,
                        dataType: 'JSON',
                        success: function(resp){
                            console.log(resp);
                        },
                        error: err => {
                            console.log(err);
                        }
                    });
                }
            }
        });
    }
})

