/**
* Modal for experimenting with different ways to instantiate modals
*/
<template>

        <dm-modal :title="Title" ok-text="Save"
               :show="show" effect="zoom" width="800px" :backdrop="(false)"
               :callback="save" :close-callback="close" >

        <div slot="modal-body" class="modal-body">
            <p>
                gogo gadget
            </p>
        </div>

        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-default" @click.prevent="close">Close</button>
        </div>
    </dm-modal>
</template>

<script>
    import Vue from 'vue'
    import DmModal from './DmModal.vue'

    export default {
        name: "TestModal",
        components: {
            DmModal: DmModal,
        },

        created () {
            this.$bus.$on('open-test-modal', this.open);
            this.$bus.$on('close-test-modal', this.close);
        },

        data () {
            return {
                show: true,
            }
        },

        methods: {

            open: function(){
                this.show = true;
            },

            close: function(){
                this.show = false;
            },
        }
    }
</script>

