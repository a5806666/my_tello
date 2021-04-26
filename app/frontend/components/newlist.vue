<template>
    <div class="container">
        <button v-if="!creatingList" class="new_button" @click="newlist">
            <i class="fas fa-plus"></i> リストを追加
        </button>
        <input v-if="creatingList" type="text" class="list_name" placeholder="リストのタイトル">
        <button v-if="creatingList" class="button create_button" @click="createList">リストを追加</button>
        <button v-if="creatingList" class="button cancel_button" @click="creatingList = false">取り消す</button>
    </div>
</template>

<script>
    export default {
        name: 'Newlist',
        data: function(){
            return {
                creatingList: false
            }
        },
        methods: {
            newlist(event){
                event.preventDefault();
                this.creatingList = true;
            },
            createList(event){
                event.preventDefault();
                this.creatingList = false;
                console.log('create');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .new_button {
        @apply font-bold w-full text-left;

        &:focus {
            @apply outline-none;
        }
    }

    .list_name {
        @apply rounded w-full px-3 py-2 mb-2;

        &:focus {
            @apply outline-none;
        }
    }

    .button {
        @apply px-3 py-1 rounded font-bold text-sm;

        &:focus {
            @apply outline-none;
        }
    }

    .create_button {
        @apply bg-gray-400;
    }

    .cancel_button {
        @apply bg-white;
    }

    .container {
        @apply bg-gray-300 px-3 py-2 mx-2 w-64 h-full rounded flex-none;
    }
</style>