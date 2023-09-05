# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# This is declaring the Blog Posts controller class, which is inheriting from the built in class in rails, which allows you to make custom controllers.
class BlogPostsController < ApplicationController
# An index action method 
  def index
# Retrieving all records of the BlogPost model. The instance variable posts will make it visible in the view.  
@posts = BlogPost.all 
#instance var plaralized for record iteration = Model.all 

  end

# show will display a certain blog post and it's contents. The id param will allow an primary key to be passed in in the URL for specifity
  def show
    @post = BlogPost.find(params[:id])
# Singular instance var since it's only 1 record retrieval
  end

# This will show a form for users to create a new blog.
  def new
    @post = BlogPost.new
# .new is the built in active record method 
  end

  def create
# Will create a new blog post, will require valid params like blog title and content.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
# If the params pass the set rules, this will direct the user to the newly created blog
    end
  end

  def edit
# Shows another form to edit a specific blog by it's ID
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
# Will find an existing blog by it's ID, then it can be updated with a form 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
# Will try to delete a specific blog by ID. if it works, the user will be redirected to the home page.
      redirect_to blog_posts_path
    end
  end

# The method in private can only be used internally. users will not be able to. it can't called by any external http requests. It can also hide details or keep certain methods hidden. 
  private
  def blog_post_params
# Require is a security measure. In this case a param is required, if it's missing it'll cause a 400 error for missing essential data.
# Permit is also a security measure, here title and content params are permitted.

# Together they spicify what is allowed to be updated, the params are enforced stopping any malicious submissions.
    params.require(:blog_post).permit(:title, :content)
  end
end
