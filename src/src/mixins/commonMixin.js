import common from "@/utils/common";
import GradioAPI from "@/utils/gradioAPI";

export default {
    data() {
        return {
            /**
             * @type {GradioAPI}
             */
            gradioAPI: null,
        }
    },
    beforeMount() {
        this.gradioAPI = new GradioAPI()
    },
    methods: {
        loraExists(name) {
            if (typeof this.loras !== 'object') return name
            for (let key in this.loras) {
                if (this.loras[key] === name) {
                    return this.loras[key]
                }
            }
            return false
        },
        lycoExists(name) {
            if (typeof this.lycos !== 'object') return name
            for (let key in this.lycos) {
                if (this.lycos[key] === name) {
                    return this.lycos[key]
                }
            }
            return false
        },
        embeddingExists(name) {
            if (typeof this.embeddings !== 'object') return name
            for (let key in this.embeddings) {
                if (this.embeddings[key] === name) {
                    return this.embeddings[key]
                }
            }
            return false
        },
    }
}