<template>
    <div id="app">
        <button @click.prevent="openComplexDataModal">Open Complex Modal</button>

        <div id="modalStack" v-for="(modalObj, index) in modalStack">
            <component v-model="modalObj.data" :is="modalObj.modalName"></component>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import DmModal from './modals/DmModal.vue'
    import SimpleDataModal from './modals/SimpleDataModal.vue'
    import ComplexDataModal from './modals/ComplexDataModal.vue'

    export default {
        name: 'app',
        components: {
            SimpleDataModal,
            ComplexDataModal,
        },
        data: function () {
            return {
                modalStack: [],
                complexData: {
                    message: "ok",
                    complexObject: {
                        name: 'A complex object with a name and some other objects',
                        thing1: false,
                        thing2: [1, 2, 3],
                        embeddedSimpleton: {
                            modalName: "SimpleDataModal",
                            basicString: "more gadgeteering",
                        }
                    }
                }
            }
        },

        created () {
            let _self = this;
            this.$bus.$on("open-modal", function(data) {
                _self.eventSwitch("open-modal", data);
            });
        },

        methods: {

            eventSwitch: function(event, data) {
                switch (event) {
                    case 'open-modal': {
                        this.modalStack.push(data);
                        break;
                    }
                }
            },

            openComplexDataModal: function() {
                let complexData = {
                    modalName: "ComplexDataModal",
                    data: this.complexData
                };
                this.$bus.$emit('open-modal', complexData);
            }
        }
    }
</script>

