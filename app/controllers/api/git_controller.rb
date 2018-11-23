# frozen_string_literal: true

module Api
  class GitController < ApplicationApiController
    def fetch_branches
      render json: { branches: `cd ~/RubymineProjects/test_cleaner && git branch --no-merged master`.split("\n").map(&:strip) }
    end

  end
end

