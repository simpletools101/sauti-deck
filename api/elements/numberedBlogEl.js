import { fetchBlogDataQuery } from "../queries/blogs/numberedBlog";
import { format, parseISO } from "date-fns";

class NumberedBlog {
  currentBlogContainer = document.querySelector("#v-blogs-more");

  constructor() {
    this.main();
  }

  main() {
    console.log("will-received-numbered-blogs");
    fetchBlogDataQuery().then((data) => {
      console.log("did-receive numbered-blog", data);
      let receivedBlogData = data.sautiBlogPosts;
      this.appendToInitalContainer(receivedBlogData);
    });
  }

  appendToInitalContainer(data) {
    data.forEach((v) => {
      let currentTemplate = this.getTemplate1(
        `/blog-view.html?url=${v.postSlug}`,
        v.title,
        v.postImage.url,
        v.label,
        v.createdAt,
        v.shortDescription
      );
      this.currentBlogContainer.insertAdjacentHTML(
        "afterBegin",
        currentTemplate
      );
    });
  }

  getTemplate1(slugUrl, title, imgCover, label, createdTime, description) {
    const formatted = format(parseISO(createdTime), "MMMM dd yyyy");
    return `
               <div class="col-lg-6">
    
                                    <a href="${slugUrl}" class="mil-blog-card mil-mb-60">
                                        <div class="mil-cover-frame mil-up">
                                            <img src="${imgCover}" alt="cover">
                                        </div>
                                        <div class="mil-post-descr">
                                            <div class="mil-labels mil-up mil-mb-30">
                                                <div class="mil-label mil-upper mil-accent">${label}</div>
                                                <div class="mil-label mil-upper">${formatted}</div>
                                            </div>
                                            <h4 class="mil-up mil-mb-30">${title}</h4>
                                            <p class="mil-post-text mil-up mil-mb-30">${description}</p>
                                            <a href="${slugUrl}" class="mil-link mil-dark mil-arrow-place mil-up">
                                                <span>Read more</span>
                                            </div>
                                        </div>
                                    </a>
    
                                </div>
            `;
  }
}

new NumberedBlog();
