import React from 'react';
import '../common/style/reset.css'
import '../common/style/base.css'

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="header-top-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-google-plus"></i></a>
              </div>
              <div className="header-top-sign-in row align-items-center">
                <div className="sign-in-icon">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="sign-in-title">sign in</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="logo">
                  <a href="#"><span>My</span>Blog</a>
                </div>
              </div>
              <div className="col-6">
                <nav>
                  <ul className="main-menu row justify-content-between">
                    <li className="main-menu-item"><a href="#">About</a></li>
                    <li className="main-menu-item"><a href="#">Blog</a></li>
                    <li className="main-menu-item"><a href="#">Photos</a></li>
                    <li className="main-menu-item"><a href="#">Videos</a></li>
                    <li className="main-menu-item"><a href="#">Stories</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-1"></div>
              <div className="col-2">
                <div className="header-search">
                  <input className="header-search-plholder" type="text" placeholder="search"></input>
                  <input className="header-search-btn" type="button"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="header-subtitle">Life is a journey</div>
                <div className="header-title">My Adventure World</div>
                <div className="header-description">Immerse yourself in a world of new experiences and unsurpassed landscapes</div>
              </div>
            </div>
            <div className="btn-read-more">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="sort-blog">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-2">
                <div className="sort-blog-title">sort blog:</div>
              </div>
              <div className="col-10">
                <div className="sort-blog-items row flex-wrap">
                  <div className="sort-blog-item">all</div>
                  <div className="sort-blog-item">photography</div>
                  <div className="sort-blog-item">lifestyle</div>
                  <div className="sort-blog-item">trip</div>
                  <div className="sort-blog-item">inspiration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <div className="content-main">
                  <div className="content-grid">
                    <div className="row">
                      <div className="col">
                        <div className="content-grid-post post-vertical">
                          <div className="post-img post-img-top">
                            <img src="images/grid-1.jpg" alt=""></img>
                            <div className="post-tag">Lifestile</div>
                            <div className="post-likes row">
                              <div className="post-coment">
                                <div className="row">
                                  <div className="post-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                  </div>
                                  <div className="post-coment-quantity">10</div>
                                </div>
                              </div>
                              <div className="post-like">
                                <div className="row">
                                  <div className="post-like-icon">
                                    <i className="fas fa-heart"></i>
                                  </div>
                                  <div className="post-like-quantity">10</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="post-title">10 Things To Do To Change Your Life Forever</div>
                            <div className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                            <div className="post-info">
                              <div className="row justify-content-between align-items-center">
                                <div className="post-author row">
                                  <div className="post-author-foto">
                                    <img src="images/author.jpg" alt=""></img>
                                  </div>
                                  <div className="post-author-atr">
                                    <div className="post-author-name">Author Name</div>
                                    <div className="post-date">Apri 28, 2016 10:15</div>
                                  </div>
                                </div>
                                <div className="post-set">
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-grid">
                    <div className="row">
                      <div className="col">
                        <div className="content-grid-post post-aline">
                          <div className="row">
                            <div className="col-4">
                              <div className="post-img post-img-left">
                                <img src="images/2-min.jpg" alt=""></img>
                                <div className="post-tag">Photography</div>
                                <div className="post-likes row">
                                  <div className="post-coment">
                                    <div className="row">
                                      <div className="post-coment-icon">
                                        <i className="fas fa-comment-alt"></i>
                                      </div>
                                      <div className="post-coment-quantity">10</div>
                                    </div>
                                  </div>
                                  <div className="post-like">
                                    <div className="row">
                                      <div className="post-like-icon">
                                        <i className="fas fa-heart"></i>
                                      </div>
                                      <div className="post-like-quantity">10</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="post-content">
                                <div className="post-title">10 Things To Do To Change Your Life Forever</div>
                                <div className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                                <div className="post-info">
                                  <div className="row justify-content-between align-items-center">
                                    <div className="post-author row">
                                      <div className="post-author-foto">
                                        <img src="images/author.jpg" alt=""></img>
                                      </div>
                                      <div className="post-author-atr">
                                        <div className="post-author-name">Author Name</div>
                                        <div className="post-date">Apri 28, 2016 10:15</div>
                                      </div>
                                    </div>
                                    <div className="post-set">
                                      <i className="fas fa-ellipsis-v"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-grid">
                    <div className="row">
                      <div className="col">
                        <div className="content-grid-post post-aline">
                          <div className="row">
                            <div className="col-4">
                              <div className="post-img post-img-left">
                                <img src="images/3-min.jpg" alt=""></img>
                                <div className="post-tag">Trip</div>
                                <div className="post-likes row">
                                  <div className="post-coment">
                                    <div className="row">
                                      <div className="post-coment-icon">
                                        <i className="fas fa-comment-alt"></i>
                                      </div>
                                      <div className="post-coment-quantity">10</div>
                                    </div>
                                  </div>
                                  <div className="post-like">
                                    <div className="row">
                                      <div className="post-like-icon">
                                        <i className="fas fa-heart"></i>
                                      </div>
                                      <div className="post-like-quantity">10</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="post-content">
                                <div className="post-title">10 Things To Do To Change Your Life Forever</div>
                                <div className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                                <div className="post-info">
                                  <div className="row justify-content-between align-items-center">
                                    <div className="post-author row">
                                      <div className="post-author-foto">
                                        <img src="images/author.jpg" alt=""></img>
                                      </div>
                                      <div className="post-author-atr">
                                        <div className="post-author-name">Author Name</div>
                                        <div className="post-date">Apri 28, 2016 10:15</div>
                                      </div>
                                    </div>
                                    <div className="post-set">
                                      <i className="fas fa-ellipsis-v"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-grid">
                    <div className="row">
                      <div className="col">
                        <div className="content-grid-post post-aline">
                          <div className="row">
                            <div className="col-4">
                              <div className="post-img post-img-left">
                                <img src="images/4-min.jpg" alt=""></img>
                                <div className="post-tag">Photography</div>
                                <div className="post-likes row">
                                  <div className="post-coment">
                                    <div className="row">
                                      <div className="post-coment-icon">
                                        <i className="fas fa-comment-alt"></i>
                                      </div>
                                      <div className="post-coment-quantity">10</div>
                                    </div>
                                  </div>
                                  <div className="post-like">
                                    <div className="row">
                                      <div className="post-like-icon">
                                        <i className="fas fa-heart"></i>
                                      </div>
                                      <div className="post-like-quantity">10</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="post-content">
                                <div className="post-title">10 Things To Do To Change Your Life Forever</div>
                                <div className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                                <div className="post-info">
                                  <div className="row justify-content-between align-items-center">
                                    <div className="post-author row">
                                      <div className="post-author-foto">
                                        <img src="images/author.jpg" alt=""></img>
                                      </div>
                                      <div className="post-author-atr">
                                        <div className="post-author-name">Author Name</div>
                                        <div className="post-date">Apri 28, 2016 10:15</div>
                                      </div>
                                    </div>
                                    <div className="post-set">
                                      <i className="fas fa-ellipsis-v"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-grid">
                    <div className="row item-margin">
                      <div className="col-4 item-padding">
                        <div className="content-grid-post post-vertical">
                          <div className="post-img post-img-top">
                            <img src="images/5-min.jpg" alt=""></img>
                            <div className="post-tag">Lifestile</div>
                            <div className="post-likes row">
                              <div className="post-coment">
                                <div className="row">
                                  <div className="post-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                  </div>
                                  <div className="post-coment-quantity">10</div>
                                </div>
                              </div>
                              <div className="post-like">
                                <div className="row">
                                  <div className="post-like-icon">
                                    <i className="fas fa-heart"></i>
                                  </div>
                                  <div className="post-like-quantity">10</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="post-title post-title-small">10 Things To Do To Change Your Life Forever</div>
                            <div className="post-text post-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                            <div className="post-info">
                              <div className="row justify-content-between align-items-center">
                                <div className="post-author row">
                                  <div className="post-author-foto">
                                    <img src="images/author.jpg" alt=""></img>
                                  </div>
                                  <div className="post-author-atr">
                                    <div className="post-author-name">Author Name</div>
                                    <div className="post-date">Apri 28, 2016 10:15</div>
                                  </div>
                                </div>
                                <div className="post-set">
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 item-padding">
                        <div className="content-grid-post post-vertical">
                          <div className="post-img post-img-top">
                            <img src="images/6-min.jpg" alt=""></img>
                            <div className="post-tag">Trip</div>
                            <div className="post-likes row">
                              <div className="post-coment">
                                <div className="row">
                                  <div className="post-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                  </div>
                                  <div className="post-coment-quantity">10</div>
                                </div>
                              </div>
                              <div className="post-like">
                                <div className="row">
                                  <div className="post-like-icon">
                                    <i className="fas fa-heart"></i>
                                  </div>
                                  <div className="post-like-quantity">10</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="post-title post-title-small">10 Things To Do To Change Your Life Forever</div>
                            <div className="post-text post-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                            <div className="post-info">
                              <div className="row justify-content-between align-items-center">
                                <div className="post-author row">
                                  <div className="post-author-foto">
                                    <img src="images/author.jpg" alt=""></img>
                                  </div>
                                  <div className="post-author-atr">
                                    <div className="post-author-name">Author Name</div>
                                    <div className="post-date">Apri 28, 2016 10:15</div>
                                  </div>
                                </div>
                                <div className="post-set">
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 item-padding">
                        <div className="content-grid-post post-vertical">
                          <div className="post-img post-img-top">
                            <img src="images/7-min.jpg" alt=""></img>
                            <div className="post-tag">Lifestile</div>
                            <div className="post-likes row">
                              <div className="post-coment">
                                <div className="row">
                                  <div className="post-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                  </div>
                                  <div className="post-coment-quantity">10</div>
                                </div>
                              </div>
                              <div className="post-like">
                                <div className="row">
                                  <div className="post-like-icon">
                                    <i className="fas fa-heart"></i>
                                  </div>
                                  <div className="post-like-quantity">10</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="post-title post-title-small">10 Things To Do To Change Your Life Forever</div>
                            <div className="post-text post-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                            <div className="post-info">
                              <div className="row justify-content-between align-items-center">
                                <div className="post-author row">
                                  <div className="post-author-foto">
                                    <img src="images/author.jpg" alt=""></img>
                                  </div>
                                  <div className="post-author-atr">
                                    <div className="post-author-name">Author Name</div>
                                    <div className="post-date">Apri 28, 2016 10:15</div>
                                  </div>
                                </div>
                                <div className="post-set">
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-grid">
                    <div className="row item-margin">
                      <div className="col-6 item-padding">
                        <div className="content-grid-post post-vertical">
                          <div className="post-img post-img-top">
                            <img src="images/8-min.jpg" alt=""></img>
                            <div className="post-tag">Trip</div>
                            <div className="post-likes row">
                              <div className="post-coment">
                                <div className="row">
                                  <div className="post-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                  </div>
                                  <div className="post-coment-quantity">10</div>
                                </div>
                              </div>
                              <div className="post-like">
                                <div className="row">
                                  <div className="post-like-icon">
                                    <i className="fas fa-heart"></i>
                                  </div>
                                  <div className="post-like-quantity">10</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="post-title">10 Things To Do To Change Your Life Forever</div>
                            <div className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                            <div className="post-info">
                              <div className="row justify-content-between align-items-center">
                                <div className="post-author row">
                                  <div className="post-author-foto">
                                    <img src="images/author.jpg" alt=""></img>
                                  </div>
                                  <div className="post-author-atr">
                                    <div className="post-author-name">Author Name</div>
                                    <div className="post-date">Apri 28, 2016 10:15</div>
                                  </div>
                                </div>
                                <div className="post-set">
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 item-padding">
                        <div className="content-grid-post post-vertical">
                          <div className="post-img post-img-top">
                            <img src="images/9-min.jpg" alt=""></img>
                            <div className="post-tag">Inspiration</div>
                            <div className="post-likes row">
                              <div className="post-coment">
                                <div className="row">
                                  <div className="post-coment-icon">
                                    <i className="fas fa-comment-alt"></i>
                                  </div>
                                  <div className="post-coment-quantity">10</div>
                                </div>
                              </div>
                              <div className="post-like">
                                <div className="row">
                                  <div className="post-like-icon">
                                    <i className="fas fa-heart"></i>
                                  </div>
                                  <div className="post-like-quantity">10</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="post-title">10 Things To Do To Change Your Life Forever</div>
                            <div className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ea temporibus unde labore, laudantium obcaecati cupiditate tempore inventore iusto distinctio accusamus. Quos laborum adipisci, eum possimus pariatur dolor, odio? Iste!</div>
                            <div className="post-info">
                              <div className="row justify-content-between align-items-center">
                                <div className="post-author row">
                                  <div className="post-author-foto">
                                    <img src="images/author.jpg" alt=""></img>
                                  </div>
                                  <div className="post-author-atr">
                                    <div className="post-author-name">Author Name</div>
                                    <div className="post-date">Apri 28, 2016 10:15</div>
                                  </div>
                                </div>
                                <div className="post-set">
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-bottom">
                    <div className="container">
                      <div className="main-more-btn">
                        <div className="row flex-end align-items-center">
                          <div className="more-btn-title">More</div>
                          <div className="more-btn-arrow">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="content-side-bar">
                  <div className="row">
                    <div className="col">
                      <div className="side-bar-search">
                        <input className="side-bar-search-plholder" type="text" placeholder="Search"></input>
                        <input className="side-bar-search-btn" type="button"></input>
                      </div>
                      <div className="side-bar-categories">
                        <div className="side-bar-title">Categories</div>
                        <div className="side-bar-categories-items">
                          <div className="side-bar-categories-item">
                            <div className="row justify-content-between">
                              <div className="side-bar-categories-item-title">Photography</div>
                              <div className="side-bar-categories-item-value">195</div>
                            </div>
                          </div>
                          <div className="side-bar-categories-item">
                            <div className="row justify-content-between">
                              <div className="side-bar-categories-item-title">Illustration</div>
                              <div className="side-bar-categories-item-value">195</div>
                            </div>
                          </div>
                          <div className="side-bar-categories-item">
                            <div className="row justify-content-between">
                              <div className="side-bar-categories-item-title">Graphic Design</div>
                              <div className="side-bar-categories-item-value">195</div>
                            </div>
                          </div>
                          <div className="side-bar-categories-item">
                            <div className="row justify-content-between">
                              <div className="side-bar-categories-item-title">Web design</div>
                              <div className="side-bar-categories-item-value">195</div>
                            </div>
                          </div>
                          <div className="side-bar-categories-item">
                            <div className="row justify-content-between">
                              <div className="side-bar-categories-item-title">Videography</div>
                              <div className="side-bar-categories-item-value">195</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="side-bar-subscribe">
                        <div className="side-bar-title">Subscribe</div>
                        <input className="side-bar-subscribe-input" type="text" placeholder="Name"></input>
                        <input className="side-bar-subscribe-input" type="text" placeholder="Email"></input>
                        <div className="side-bar-subscribe-btn">subscribe</div>
                        <div className="side-bar-social">
                          <div className="row align-items-center">
                            <div className="side-bar-subscribe-or-line"></div>
                            <div className="side-bar-subscribe-or">or</div>
                            <div className="side-bar-subscribe-or-line"></div>
                          </div>
                          <div className="side-bar-social-icons">
                            <div className="row justify-content-around">
                              <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-google-plus"></i></a>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="side-bar-posts">
                        <div className="side-bar-title">Posts</div>
                        <div className="side-bar-posts-tab">
                          <div className="row">
                            <div className="side-bar-posts-btn side-bar-posts-btn-active recent-btn">Recent</div>
                            <div className="side-bar-posts-btn popular-btn">Popular</div>
                          </div>
                        </div>
                        <div className="side-bar-post">
                          <div className="row">
                            <div className="col-4">
                              <div className="side-bar-post-img">
                                <img src="images/1-min.jpg" alt=""></img>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="side-bar-post-content">
                                <div className="side-bar-post-date">Nov 28, 2019</div>
                                <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="side-bar-post">
                          <div className="row">
                            <div className="col-4">
                              <div className="side-bar-post-img">
                                <img src="images/2-min.jpg" alt=""></img>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="side-bar-post-content">
                                <div className="side-bar-post-date">Nov 28, 2019</div>
                                <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="side-bar-post">
                          <div className="row">
                            <div className="col-4">
                              <div className="side-bar-post-img">
                                <img src="images/3-min.jpg" alt=""></img>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="side-bar-post-content">
                                <div className="side-bar-post-date">Nov 28, 2019</div>
                                <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="side-bar-post">
                          <div className="row">
                            <div className="col-4">
                              <div className="side-bar-post-img">
                                <img src="images/4-min.jpg" alt=""></img>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="side-bar-post-content">
                                <div className="side-bar-post-date">Nov 28, 2019</div>
                                <div className="side-bar-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="side-bar-tags">
                        <div className="side-bar-title">Tags</div>
                        <div className="side-bar-tags-margin">
                          <div className="row flex-wrap">
                            <div className="side-bar-tag">
                              <div className="side-bar-tag-item">photo</div>
                            </div>
                            <div className="side-bar-tag">
                              <div className="side-bar-tag-item">video</div>
                            </div>
                            <div className="side-bar-tag">
                              <div className="side-bar-tag-item">art</div>
                            </div>
                            <div className="side-bar-tag">
                              <div className="side-bar-tag-item">webdesign</div>
                            </div>
                            <div className="side-bar-tag">
                              <div className="side-bar-tag-item">illustration</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-galery">
          <div className="row">
            <div className="col-2">
              <div className="footer-galery-img">
                <img src="images/9-min.jpg" alt=""></img>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-galery-img">
                <img src="images/8-min.jpg" alt=""></img>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-galery-img">
                <img src="images/7-min.jpg" alt=""></img>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-galery-img">
                <img src="images/6-min.jpg" alt=""></img>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-galery-img">
                <img src="images/5-min.jpg" alt=""></img>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-galery-img">
                <img src="images/4-min.jpg" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-subscribe">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="footer-subscribe-title">Subscribe to our newsletter</div>
              </div>
              <div className="col-4">
                <div className="footer-subscribe-block">
                  <input className="footer-subscribe-input" type="text" placeholder="Email Adress"></input>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-subscribe-btn">subscribe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-block">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="footer-menu">
                    <nav>
                      <ul className="row flex-start align-items-center">
                        <li className="footer-menu-item"><a href="#">About</a></li>
                        <li className="footer-menu-item"><a href="#">Blog</a></li>
                        <li className="footer-menu-item"><a href="#">Photos</a></li>
                        <li className="footer-menu-item"><a href="#">Videos</a></li>
                        <li className="footer-menu-item"><a href="#">Stories</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-3">
                  <div className="footer-copyright">© Blog Prolect 2019</div>
                </div>
                <div className="col-3">
                  <div className="footer-social">
                    <div className="row flex-end">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-google-plus"></i></a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
