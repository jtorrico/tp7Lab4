<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="19"
            style="width:100%; height:586px;"
        >
        <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
        >
        </gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
export default {
    name: "GoogleMap",
    data(){
        return {
            center: {lat: -32.886297, lng: -68.838280},
            markers: [
                {
                    position: {lat: -32.886297, lng: -68.838280}
                }
            ]
        };
    }
}
</script>