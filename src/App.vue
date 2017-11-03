<template>
    <div id="app">
        <button @click.prevent="helloTest">Hi</button>
        <button @click.prevent="openFakeModal">Fake</button>
        <button @click.prevent="openSimpleDataModal">Simple</button>
        <button @click.prevent="openComplexDataModal">Complex</button>

        <div id="helloStack" v-for="hello in hellos">
            <hello-world :msg="hello.msg"></hello-world>
        </div>

        <div id="modalStack" v-for="(modalObj, index) in modalStack">
            <component v-model="modalObj.data" :is="modalObj.data.modalName"></component>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import DmModal from './modals/DmModal.vue'
    import HelloWorld from './components/HelloWorld.vue'
    import FakeModal from './modals/FakeModal.vue'
    import SimpleDataModal from './modals/SimpleDataModal.vue'
    import ComplexDataModal from './modals/ComplexDataModal.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            FakeModal,
            SimpleDataModal,
            ComplexDataModal,
        },
        data: function () {
            return {
                hellos: [],
                modalStack: []
            }
        },
        methods: {
            helloTest: function () {
                this.hellos.push({msg: "hello:" + this.modalStack.length + " "});
            },
            openFakeModal: function() {
                let fakeData = {
                    data: {
                        modalName: "FakeModal",
                    }
                };
                this.modalStack.push(fakeData);
            },
            openSimpleDataModal: function() {
                let simpleData = {
                    data: {
                        modalName: "SimpleDataModal",
                        basicString: "gogo gadget",
                    }
                };
                this.modalStack.push(simpleData);
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
                this.modalStack.push(complexData);
            }
        }
    }
</script>

