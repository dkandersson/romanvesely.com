---
title: Moved to Gatsby
description: Up until now, this site ran on PHP, but as time passed I felt like it needed a change. I've been interested in the JAMstack since I've heard about the term some two years ago. I also work with React in my job so it was obvious I would reach for <a href="https://www.gatsbyjs.org">Gatsby</a>.
tags:
  - tools
  - webdev
---

Previously I used [Statie](https://www.statie.org), PHP static site generator, and was pretty much satisfied with it as it met my needs. I've written my very first [blog](/statie-generate-and-refresh) [posts](/statie-with-css-preprocessor) about it, and also made it's own [homepage](/a-place-to-meet-statie) to help [Tomas](https://www.tomasvotruba.com), author of the tool, to spread the word. But over the time my toolset has changed, and one of my dearest features, [Latte templating system](https://latte.nette.org/), [has been removed](https://github.com/Symplify/Symplify/pull/1641) from the tool - which made me a bit sad. Although I truly understand this move and appreciate Tomas' effort in creating and maintaining the project, it was time to move on.

It's not my first Gatsby project, though. I used it for [Paralelná Polis Košice](https://www.paralelnapoliskosice.sk), which used the first version of the tool in the beginning and was refactored to the second version when it became available. So, I felt pretty much confident starting a new project as I thought I gained some good experiences.

I've identified three main things that slowed me down during the refactoring more than I expected:

- Statie aimed for simple sites and blogs - global `$posts` array was available throughout the files
- Gatsby and its ecosystem have a very vital development - there are numerous ways of how to do things, so you have to constantly think about how to approach even the basic stuff
- I needed to switch from template-based system to React components

So, the whole process took twice as much time as I expected, while I still miss some features I previously had. That makes me think if my decision of switching the tools does worth it. If I will use effortless React components in blog posts in the future, maybe it will. One can say that Gatsby generates fast websites, and it's true, but pure HTML sites Statie generates are as fast. Actually, with Statie I had **100** points in performance Lighthouse test, while **97** points with Gatsby :).

List of missing features and things to fix:

- the active menu item "notes" when reading a blog post
- image max-width and usage of Gatsby advanced image processing
- HTML in the lead paragraph - could use [markdown](https://github.com/kentcdodds/kentcdodds.com/blob/master/gatsby-node.js#L356-L360)
- images for social sites - I used [my PHP package](https://packagist.org/packages/crazko/post-social-image), and still can, but not as a part of the project
- `<abbr>` element in pages/posts
- ~~JSON feed~~ - it doesn't matter as it was probably not used by anyone

I will come back and update the list accordingly.
