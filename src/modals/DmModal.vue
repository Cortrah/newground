<template>
    <div role="dialog"
         v-bind:class="{
            'modal':true,
            'fade':effect === 'fade',
            'zoom':effect === 'zoom'
         }">
        <div v-bind:class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
             v-bind:style="{width: optionalWidth}">

            <div v-bind:class="{ 'modal-content' : true, 'tabs' : tabs  }">
                <slot name="modal-header" v-if="title">
                    <div class="modal-header">
                        <button type="button" class="close" @click="close"><span>&times;</span></button>
                        <h4 class="modal-title" >
                            <slot name="title">
                                {{title}}
                            </slot>
                        </h4>
                    </div>
                </slot>

                <slot name="modal-body">
                    <div class="modal-body" style="background-color: #f4e8d1; overflow-y: scroll"></div>
                </slot>

                <slot name="modal-footer">
                    <div class="modal-footer">
                        <a class="btn btn-default" @click.prevent="close">{{ cancelText }}</a>
                        <button type="button" class="btn btn-primary" @click="callback">{{ okText }}</button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        // uses the parent component's validator instance
        // http://vee-validate.logaretm.com/advanced.html#inject
        inject: ['$validator'],

        name: "DmModal",
        props: {
            closeCallback: {
                type: Function,
                default() {}
            },
            okText: {
                type: String,
                default: 'Save changes'
            },
            cancelText:{
                type: String,
                default: 'Close'
            },
            title: {
                type: String,
                default: ''
            },
            tabs : {
                type : Boolean,
                default: false
            },
            show: {
                require: true,
                type: Boolean
            },
            width: {
                default: null
            },
            callback: {
                type: Function,
                default() {}
            },
            effect: {
                type: String,
                default: null
            },
            backdrop: {
                type: Boolean,
                default: true
            },
            large: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            }
        },
        mounted : function() {
            this.$watch('show', (val)=> {
                const el = this.$el;
                const body = document.body;
                if (val) {
                    el.querySelector('.modal-content').focus();
                    el.style.display = 'block';
                    el.style.overflow = 'visible';
                    setTimeout(()=> el.classList.add('in'), 0);
                    body.classList.add('modal-open');
                    body.style.overflow = 'hidden';
                } else {
                    if (this._blurModalContentEvent) this._blurModalContentEvent.remove();
                    el.classList.remove('in');
                    setTimeout(()=> {
                        el.style.display = 'none';
                        body.classList.remove('modal-open');
                        body.style.paddingRight = '0'
                    }, 300)
                }
            }, { immediate: true })
        },
        computed: {
            optionalWidth: function() {
                if( this.width === null ) {
                    return null;
                } else if( Number.isInteger(this.width) ) {
                    return this.width + "px";
                }
                return this.width;
            },
        },
        methods: {
            close() {
                if (this.closeCallback) {
                    this.closeCallback();
                }
                const body = document.body;
                body.classList.remove('modal-open');
                body.style.overflow = 'auto';
            }
        }
    }
</script>

<style>
    .modal {
        transition: all 0.3s ease;
        position: fixed;
        height: 100%;
    }
    .modal.in {
        background-color: rgba(0,0,0,0.5);
    }
    .modal.zoom .modal-dialog {
        -webkit-transform: scale(0.1);
        -moz-transform: scale(0.1);
        -ms-transform: scale(0.1);
        transform: scale(0.1);
        top: 300px;
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .modal.zoom.in .modal-dialog {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transform: translate3d(0, -300px, 0);
        transform: translate3d(0, -300px, 0);
        opacity: 1;
    }

    .modal-content {
        height: 620px;
    }
    .modal-body {
        background-color: #FAFAFA;
        height: 500px;
        overflow-y: auto
    }
</style>
