class LinksController  < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: Link.all, each_serializer: LinkSerializer, root: nil }
    end
  end
end
