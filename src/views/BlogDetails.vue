<template>
    <div>
        <div class="blogs" v-for="(blogs, i) in blogs" :key="i">
            <div v-if="rId == blogs.Id" class="blog">
                <h3>{{blogs.title}}</h3><br>
                <img :src="blogs.image">
                <div class="blog-desc">{{blogs.desc}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.blogs {
    margin: 24px ;
    .blog {
        border: 2px solid $brown;
        padding: 0 16px 16px 16px;
        border-radius: 6px;
    }
}
</style>
<script>
import data from '../../public/data.json'
    export default {
        name: 'BlogDetails',
        data() {
            return {
                rId: this.$route.params.Rid,
                blogs: data.blogs
            }
        }
    }
</script>