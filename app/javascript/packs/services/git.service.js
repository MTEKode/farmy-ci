class GitService {
  constructor($http) {
    this.http = $http;
  }

  fetchNotMergedBranches() {
    return this.http.get('/api/git_branches.json');
  }
}

export default GitService;