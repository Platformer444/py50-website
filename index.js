let navbar = `
	<nav class="navbar navbar-dark navbar-expand-lg bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="index.html">Py50</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="index.html">Home</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tutorial</a>
						<ul class="dropdown-menu">
							<li><h6 class="dropdown-header">Coding</h6></li>
							<li><a class="dropdown-item" href="py50.html">py50 Library</a></li>
							<li><h6 class="dropdown-header">Developing</h6></li>
							<li><a class="dropdown-item" href="command.html">Making a new command</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="credits.html">Credits</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="changelog.html">Changelog</a>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit" onclick="alert('Does not Work!!!!');">Search</button>
				</form>
			</div>
		</div>
	</nav>
`;
createNavbar();

function createNavbar() {
	document.querySelectorAll('navbarContainer')[0].innerHTML = navbar;
}