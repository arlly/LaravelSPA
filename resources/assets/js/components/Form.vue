<template>
    <div class="container">
        <div v-if="saved" class="alert alert-primary" role="alert">
            保存しました
        </div>

        <div v-if="is_error">
            <p>エラーがあります！</p>
            <ul>
                <li v-for="(error) in errors">{{ error }}</li>
            </ul>
        </div>

        <form>
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="TopicTitle" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">内容</label>
                <textarea class="form-control" id="TopicContent" rows="3" v-model="content"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="create">登録</button>
        </form>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                saved: false,
                title: '',
                content: '',
                errors: '',
                is_error: false
            }
        },
        methods: {
            create: function () {
                axios.post('/public/api/topics', {
                    title: this.title,
                    content: this.content,
                })
                    .then((res) => {
                        this.title = '';
                        this.content = '';
                        this.saved = true;
                        console.log('created');
                    })
                    .catch(e => {
                        console.log(e.response.data.errors);
                        this.errors = e.response.data.errors;
                        this.is_error = true;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
