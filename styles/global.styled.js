import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;

}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  /* background: ${({ theme }) => theme.background}; */
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.sansFont};
  background-image: url('/images/groovepaper.png')
}

/* Remove list styles on ul, ol elements with a class attribute */
ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
  cursor: pointer;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Custom */
main {
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
  z-index: 0;
  padding: 0 12px 48px;
}
header {
  z-index: 1;
  /* background: white; */
  position: sticky;
   top: 0;
   backdrop-filter: blur(8px);
   background-color:#ffffffcc;
   height: 60px;
}
nav {
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
}

footer {
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
}

img {
	height: auto;
	width: 100%;
}

p {
	font-size: 18px;
  font-family: ${({ theme }) => theme.sansFont};
}

h1,
h2,
h3,
h4,
h5,
h6 {
 /* font-family: ${({ theme }) => theme.serifFont}; */
 font-family: ${({ theme }) => theme.sansFont};
 font-weight: 900;
}

h1 {
  font-size:65px;
  transition: .3s;
}

@media (max-width:1100px) {
		h1 {
      font-size:50px;
	}
}

  @media (max-width: 600px) {
		h1 {
      font-size:35px;
	}
}

*::-moz-selection { /* Code for Firefox */
  background: black;
  color: white;
}

*::selection {
  background: black;
  color: white;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


`;
