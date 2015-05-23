class StepsController  < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: Step.all.order(:created_at), each_serializer: StepSerializer, root: nil }
    end
  end
end
