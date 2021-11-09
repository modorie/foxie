from django.urls import path
from . import views
app_name = 'articles'
urlpatterns = [
    # POST /articles/
    # GET /articles/
    path('articles/', views.article_create_or_list),
    # GET /articles/1/
    # PUT /articles/1/
    # DELETE /articles/1/
    path('articles/<int:article_pk>/', views.article_detail_or_update_or_delete),
    # POST /articles/1/comments/
    path('articles/<int:article_pk>/comments/', views.comment_create),
    # PUT /articles/1/comments/1/
    # DELETE /articles/1/comments/1/
    path('articles/<int:article_pk>/comments/<int:comment_pk>/', views.comment_update_or_delete),
]