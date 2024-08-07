<template>
  <div class="profile-card">
    <div class="profile-header">
      <img src="../assets/img/user.jpeg" alt="Profile Picture" class="profile-pic" />
      <div>
        <h2 class="poppins-bold mb-0 fs-3">Christian Andy Pratama W</h2>
        <p class="poppins-light fs-6">
          2015538269<br />IT Specialist Trainee <br />SOFTWARE DEVELOPMENT 2
        </p>
      </div>
    </div>
    <div class="profile-section">
      <h3 class="poppins-semibold mb-0 fs-5">Personal Information</h3>
      <div class="profile-info">
        <div><strong>No HP i.saku : </strong> 082350636720</div>
        <div><strong>No HP Karyawan : </strong> 082350636720</div>
        <div><strong>ID Telegram : </strong> @andypraww</div>
        <div><strong>Email Pribadi : </strong> christianandypw@gmail.com</div>
        <div><strong>Email Kantor : </strong> andypw@indmoaret.co.id</div>
      </div>
    </div>

    <hr />
    <div class="profile-section">
      <h3 class="poppins-semibold mb-0 fs-5">Employee Data</h3>
      <div class="profile-info">
        <div><strong>Unit :</strong> PT Indomarco Prismatama</div>
        <div><strong>Cabang :</strong> Head Office</div>
        <div><strong>Tanggal Masuk :</strong> 01/07/2024</div>
        <div><strong>Status Karyawan :</strong> Kontrak 1 Tahun</div>
        <div><strong>Tanggal Diangkat Tetap :</strong> 01/07/2024</div>
        <div><strong>Hari Kerja :</strong> 5 Hari Non Shift</div>
        <div><strong>Job Class :</strong> C3</div>
        <div><strong>Lama Bekerja :</strong> 39 Hari</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nunito-medium {
  font-family: 'Nunito ', sans-serif !important;
  font-weight: 400;
}
.poppins-light {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
}
.poppins-regular {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.poppins-medium {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 500;
  font-style: normal;
}
.poppins-semibold {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
  font-style: normal;
}
.poppins-bold {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700;
  font-style: normal;
}
.poppins-black {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 900;
  font-style: normal;
}
.profile-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-section {
  margin-bottom: 20px;
}

.profile-info {
  display: flex;
  flex-wrap: wrap;
}

.profile-info > div {
  flex: 1 1 50%;
  padding: 10px 0;
}
</style>
