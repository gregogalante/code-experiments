# *** Auxilium ***
# Simple logger support to rails projects

# set path where to save logs

AUXILIUM_LOG_PATH = "#{Rails.root}/log"

# set repetition for logs file
# value:
# - never -> a single file for all logs
# - daily -> one file of logs for every day

AUXILIUM_LOG_REPETITION = 'never'

################################################################################
################################################################################

class Auxilium

  # log path
  @@log_path = AUXILIUM_LOG_PATH
  # log repetition
  @@log_repetition = AUXILIUM_LOG_REPETITION


  def initialize(*args)
    generate_log_path @@log_path
    log_file_path = get_log_file

    json = File.read log_file_path
    json_data = JSON.parse json
    json_data << args.first

    File.open log_file_path, "w" do |f|
      f.write JSON.pretty_generate json_data
    end
  end


  # return correct log file
  protected def get_log_file
    case @@log_repetition
    when 'never'
      return get_never_log_file
    when 'daily'
      return get_daily_log_file
    else
      raise 'Auxilum class: AUXILIUM_LOG_REPETITION value is not correct.'
    end
  end

  private def get_never_log_file
    file = "#{pretty_log_path @@log_path}auxilium_logs.json"
    generate_log_file file
    return file
  end

  private def get_daily_log_file
    today = Date.today
    file = file = "#{pretty_log_path @@log_path}#{today.strftime('%Y_%m_%d')}_auxilium_logs.json"
    generate_log_file file
    return file
  end


  ### Helpers

  # generate file with name set as params
  private def generate_log_file file
    unless File.exist?(file)
      File.open(file, "w") do |f|
        f.write '[]'
      end
    end
  end

  # check log path exist
  private def generate_log_path path
    Dir.mkdir(path) unless File.exists?(path)
  end

  # return log path with correct / end
  private def pretty_log_path path
    return "#{path}/" unless path.match(/\/$/)
    return path
  end


end
