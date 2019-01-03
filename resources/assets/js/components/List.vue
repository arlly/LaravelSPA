<template>
    <div class="container">
        <div v-if="deleted" class="alert alert-primary" role="alert">
            削除しました
        </div>
        <div class="list-group">
            <router-link v-for="( item, key, index ) in items" :key="key"
                         :to="{ name: 'detail', params: { id: item.id } }" class="list-group-item">
                {{item.title}}
                <button class="btn" @click.stop.prevent="onDelete(item.id, key)">削除</button>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                items: null,
                deleted: false,
            }
        },
        mounted: function () {
            this.getItems();
        },
        methods: {
            getItems: function () {
                axios.get('/public/api/topics')
                    .then((res) => {
                        this.items = res.data.data;
                    });
            },
            onDelete: function (id, key) {
                axios.delete('/public/api/topics/' + id)
                    .then(() => {
                        this.$delete(this.items, key);
                        this.deleted = true;
                        console.log('削除しました！')
                    })
            }
        }
    }
</script>

<style scoped>

</style>
