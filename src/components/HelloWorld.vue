<template>
    <div class="hello">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            'msg': {
                required: false,
                default: "default"
            }
        }
    }
</script>
