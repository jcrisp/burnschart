class ChartController < ApplicationController
  layout 'common'

  def index
  end

  def submit
    link_params = {:action=>'load'}.merge(params)
    link_params.delete('commit')
    url = url_for(link_params)
    PostOffice.deliver_burns_information(params['name'], url)
    render :action=>'send'
  end
  
  def load
  end

end
