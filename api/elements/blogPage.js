import { fetchBlogDataQuery } from "../queries/blogs/blog";
import { format, parseISO } from "date-fns";

/**
 * This is the main blog page where all the blogs are brought  to
 */

class BlogV {
  _blog_container_1 = document.querySelector("#blog-container-1");
  _blog_container_2 = document.querySelector("#blog-container-2");

  constructor() {
    this.main();
  }

  main() {
    /**
     * We want the number to be divisble by two so that we c
     * can divide them
     *
     *
     */
    console.log("will-fetch-blog-data");

    fetchBlogDataQuery().then((data) => {
      let fetchedData = data.sautiBlogPosts;

      console.log("did-fetch-blog-data", fetchedData);

      /**
       * We assume the first two publications are the popular ones
       */

      let intialContainerData = fetchedData.slice(0, 1);
      this.appendToInitalContainer(intialContainerData);

      /**
       * The rest of the data till the end
       */
      let theRestOFtheStuff = fetchedData.slice(2);

      if (theRestOFtheStuff.length > 0) {
        this.appendToSecondContainer(theRestOFtheStuff);
      }
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
      this._blog_container_1.insertAdjacentHTML("afterBegin", currentTemplate);
    });
  }

  appendToSecondContainer(data) {
    data.forEach((v) => {
      let currentTemplate = this.getTemplate2(
        `/blog?url=${v.postSlug}`,
        v.title,
        v.postImage.url,
        v.label,
        v.createdAt,
        v.shortDescription
      );
      this._blog_container_1.insertAdjacentHTML("afterBegin", currentTemplate);
    });
  }

  /**
   * This resides for the intial Blog Container(Popular Publications)
   * @param {*} slugUrl
   * @param {*} title
   * @param {*} imgCover
   * @param {*} label
   * @param {*} createdTime
   * @param {*} description
   * @returns
   */

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
  /**
   * This is for the second Blog Container
   * @param {*} slugUrl
   * @param {*} title
   * @param {*} imgCover
   * @param {*} label
   * @param {*} createdTime
   * @param {*} description
   * @returns
   */
  getTemplate2(slugUrl, title, imgCover, label, createdTime, description) {
    return `
           <div class="col-lg-12">

                                <a href="${slugUrl}" class="mil-blog-card mil-mb-60">
                                    <div class="mil-cover-frame mil-up">
                                        <img src="${imgCover}" alt="cover">
                                    </div>
                                    <div class="mil-post-descr">
                                        <div class="mil-labels mil-up mil-mb-30">
                                            <div class="mil-label mil-upper mil-accent">${label}</div>
                                            <div class="mil-label mil-upper">${createdTime}</div>
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

new BlogV();
