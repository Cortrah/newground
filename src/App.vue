<template>
    <div id="app">
        <button @click.prevent="openComplexDataModal">
            Open Complex Modal
        </button>
        <button @click.prevent="createGroup">
            Create Group
        </button>
        <button @click.prevent="cloneGroup">
            Clone Group
        </button>
        <button @click.prevent="createSurvey">
            Create Survey
        </button>
        <button @click.prevent="cloneSurvey">
            Clone Survey
        </button>

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
    import Group from './domain/Group';
    import Survey from './domain/Survey';

    export default {
        name: 'app',
        components: {
            SimpleDataModal,
            ComplexDataModal,
        },
        data: function () {
            return {
                g1: null,
                s1: null,
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
            this.$bus.$on("close-modal", function() {
                _self.eventSwitch("close-modal");
            });
        },

        methods: {

            eventSwitch: function(event, data) {
                switch (event) {
                    case 'open-modal': {
                        this.modalStack.push(data);
                        break;
                    }
                    case 'close-modal': {
                        this.modalStack.pop();
                        break;
                    }
                }
            },

            openComplexDataModal: function() {
                let dataForModal = {
                    modalName: "ComplexDataModal",
                    data: this.complexData
                };
                this.$bus.$emit('open-modal', dataForModal);
            },

            createGroup: function() {
                this.g1 = new Group({
                    id: 4,
                    title: 'a',
                    titleInternal: 'a',
                    machineName: 'a',
                    narrative: 'a',
                    rowLabelColumnHeader: 'a',
                    type: null,
                    format: null,
                    rowLabels: [],
                    questions: [],
                    children: [],
                    nonChildQuestions: [],
                    buttonLabelAdd: 'addular',
                    buttonLabelRemove: 'removeular'
                });
                console.log(this.g1);
            },

            createSurvey: function() {
                this.s1 = new Survey({
                    id: 4,
                    title: "b",
                    titleInternal: "c",
                    machineName: "D",
                    narrative:  "eeeeee",
                    groupVersionMachineName: "FFF",
                    group: this.g1,
                });
                console.log(this.s1);
            },

            cloneGroup: function() {
                console.log(this.g1);
                let g2 = this.g1.clone();
                console.log(g2);
            },

            cloneSurvey: function() {
                console.log(this.s1);
                let s2 = this.s1.clone();
                this.g1.title = "gogo";
                console.log(s2);
                console.log(this.g1.title);
                console.log(s2.group.title);
            },
        }
    }
</script>

