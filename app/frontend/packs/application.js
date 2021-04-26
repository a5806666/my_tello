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
import store from 'stores/list';
import { mapGetters, mapActions } from 'vuex';
import Newlist from 'components/newlist';

document.addEventListener("turbolinks:load", function(event) {
    let el = document.querySelector('#board');

    if (el) {
        new Vue({
            el: el, // #board
            store: store,
            computed: {
                // ...mapGetters(["lists"])
                lists: {
                    get() {
                        return this.$store.state.lists;
                    },
                    set (value) {
                        this.$store.commit('UPDATE_LISTS', value);
                    }
                }
            }, 
            // data: {
                // lists: JSON.parse(el.dataset.lists)
                // lists: []
            // },
            components: { List: List, draggable: draggable, Newlist: Newlist },
            methods: {
                ...mapActions(["loadList", "moveList"]),
                // listMoved(event){

                    // console.log(event);

                    // let data = new FormData();
                    // data.append("list[position]", event.moved.newIndex + 1);
                    // console.log(this.lists[event.moved.newIndex].id);

                    // Rails.ajax({
                    //     /lists/2/move
                    //     url: `/lists/${this.lists[event.moved.newIndex].id}/move`,
                    //     type: 'PUT',
                    //     data: data,
                    //     dataType: 'JSON',
                    //     success: function(resp){
                    //         console.log(resp);
                    //     },
                    //     error: err => {
                    //         console.log(err);
                    //     }
                    // });
                // }
            },
            beforeMount() {
                this.loadList();
                // Rails.ajax({
                //     url: 'lists.json',
                //     type: 'GET',
                //     dataType: 'json',
                //     success: (resp) => {
                //         // console.log(resp);
                //         this.lists = resp;
                //     },
                //     error: (err) => {
                //         console.log(err);
                //     }
                // });
            }
        });
    }
})

