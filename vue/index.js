
Vue.component('model', {
    props:['key_id', 'title'],

    data () {
        return {
            show1: false
        }
    },

    methods: {
        ok () {
            this.$emit('remove')
        },
        cannel () {
            this.$emit('cannel')
        }
    },

    template: `
        <div class="model" >
            <div class="model--id">
                {{ key_id }}
            </div>
            <div class="model--name">
                {{ title }}
            </div>
            <button @click="ok">OK</button>
            <button @click="cannel">Cannel</button>
        </div>
    `
});


Vue.component('edit-uses', {
    props:['key_id'],
    data () {
        return {
            change_title: ""
        }
    },

    methods: {
        save () {
            this.$emit('save', this.key_id, this.change_title)
        },
        cannel () {
            this.$emit('cannel')
        }
    },

    template: `
        <div class="edit">
            <input name="edit" v-model="change_title"  placeholder="chinh sua title tai day"/>
            <div class="btn-groups">
                <button @click="save"> Save </button>
                <button @click="cannel"> Cannel </button>
            </div>
        </div>
    `
})

var app = new Vue({

    el:"#vue",

    data () {
        return {
            arr: [],
            show: false,
            show_add:false,
            show_add_btn:true,
            show_edit:false,
            name: "",
            title: "",
            keySearch: "",
            keyId: 0,
            keyTitle: "",
            index: 0,
            currentIndex: 20
        }
    },
    methods: {

        show_Add () {
            this.show_add = true;
            this.show_add_btn = false;
        },

        cannel () {
            this.show_add = false;
            this.show_add_btn = true;
        },

        cannel_use () {

            this.show = false;
        },

        cannel_edit () {
            this.show_edit =  false;
        },

        remove (id) {

            this.show = true;

            this.arr.map((item) => {
                if (item.id === id) {
                    this.keyId = item.id;
                    this.keyTitle = item.title;
                }
            })
        },


        removeArr () {

            this.show = false;

            for(var i = 0; i < this.arr.length; i ++) {

                if(this.arr[i].id === this.keyId) {

                    this.arr.splice(i, 1);
                }
            }
        },

        add () {
            this.show_add = false;
            this.show_add_btn = true;
            this.arr.push({

                id: this.arr[this.arr.length - 1].id + 1,

                name: this.name,

                title: this.title
            })
        },

        change (id, title) {
            // console.log(id);
            // console.log(title);

            if(title){
                for(item in this.arr){
                    if(this.arr[item].id === id){
                        this.arr[item].title = title;
                        this.show_edit =  false;                  
                    }
                }
            }else{
                alert("yeu cau nhap lai")
            }

        },

        edit (id) {

            this.show_edit = true;

            for(item in this.arr){
                if(this.arr[item].id === id){
                    this.keyId = this.arr[item].id;                   
                }
            }
        },

        location (key) {
            let index = key * 20; //20
            let currentIndex = index + 20; //40
            this.index = index;
            this.currentIndex = currentIndex;
            // console.log(this.index);
            // console.log(this.currentIndex);
        }

    },

    created() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then( res =>
            this.arr.push(...res.data)
        ).catch((err) => {
            console.log(err);
        });
    },

    computed: {

        search () {
            let name = this.keySearch;

            if(!name) {
                return this.arr.slice(this.index, this.currentIndex);
            }
            return this.arr.filter(function (item) {
                if (( item.title.indexOf(name) > -1 )) {
                    return item;
                }
            })
        },

        pagination () {

            let index = 0;

            let currentIndex = this.arr.length / 20;

            let arr_slice = this.arr.slice(index, currentIndex);

            return arr_slice;
        },
    }

});
