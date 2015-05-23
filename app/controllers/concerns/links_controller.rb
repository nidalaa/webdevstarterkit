class LinksController  < ApplicationController

  def index
    respond_to do |format|
      format.json { render json: Link.all, each_serializer: LinkSerializer, root: nil }
    end
  end

  def create
    link = Link.new(link_params)

    respond_to do |format|
      format.json do
        if link.save
          render json: link
        else
          render json: link.errors, status: :unprocessable_entity
        end
      end
    end
  end

  private
  def link_params
    params.permit(:step_id, :url, :description, :title)
  end

end
