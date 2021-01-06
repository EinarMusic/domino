<template>
	<router-view />
</template>

<script>
import store from "./store";
import router from "./router";

export default {
	name: "App",
	store,
	router,
};
</script>
