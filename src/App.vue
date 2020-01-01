<template>
	<div id="app">
		<FlashMessage></FlashMessage>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">Energy monitor</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">

					<router-link tag="li" class="nav-item" active-class="active" to="/gas"><a href="/gas" class="nav-link">Plyn</a></router-link>
					<router-link tag="li" class="nav-item" active-class="active" to="/electric"><a href="/electric" class="nav-link">Elektřina</a></router-link>
				</ul>
			</div>
		</nav>

		<!-- component matched by the route will render here -->
		<router-view/>
	</div>
</template>

<script>

	export default {
		name: 'app'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 40px;
	}
</style>
