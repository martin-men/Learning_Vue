<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored
            resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add
            resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official guide to Vue.js.',
                    link: 'https://vuejs.org/'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Google search engine.',
                    link: 'https://www.google.com/'
                },
                {
                    id: 'facebook',
                    title: 'Facebook',
                    description: 'Facebook social media.',
                    link: 'https://www.facebook.com/'
                }
            ]
        }
    },
    provide() {
        return {
            storedResources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link
            }
            this.storedResources.unshift(newResource)
            this.selectedTab = 'stored-resources'
        },
        removeResource(resourceId) {
            const resourceIndex = this.storedResources.findIndex(resource => resource.id === resourceId)
            this.storedResources.splice(resourceIndex, 1)
        }
    }
}
</script>
