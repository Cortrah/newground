<template>
    <div id="app">
        <button @click.prevent="openSimpleDataModal">Simple</button>
        <button @click.prevent="openComplexDataModal">Complex</button>

        <div id="modalStack" v-for="(modalObj, index) in modalStack">
            <component v-model="modalObj.data" :is="modalObj.data.modalName"></component>
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
                modalStack: []
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
                if (typeof event !== "undefined") {
                    switch (event) {
                        case 'open-modal': {
                            this.modalStack.push(data);
                            break;
                        }
                    }
                }
            },

            openSimpleDataModal: function() {
                let simpleData = {
                    data: {
                        modalName: "SimpleDataModal",
                        basicString: "gogo gadget",
                    }
                };
                this.$bus.$emit('open-modal', simpleData);
            },

            openComplexDataModal: function() {
                let complexData = {
                    data: {
                        modalName: "ComplexDataModal",
                        message: "at:" + new Date().getSeconds().toString(),
                        complexObject: {
                            name: 'A complex object with a name and some other objects',
                            thing1: false,
                            thing2: function () {
                                return "thing2 is a string as a function"
                            },
                            thing3: [1, 2, 3]
                        }
                    }
                };
                this.$bus.$emit('open-modal', complexData);
            }
        }
    }
</script>

